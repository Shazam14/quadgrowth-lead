/**
 * Proxies Claude requests so the API key stays on the server (Vercel env only).
 * Set ANTHROPIC_API_KEY in: Vercel → Project → Settings → Environment Variables
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || !apiKey.trim()) {
    return res.status(503).json({
      error: 'Pitch coach is not set up yet. Add ANTHROPIC_API_KEY in Vercel → Settings → Environment Variables, then redeploy.'
    });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const { model, max_tokens, system, messages } = body;
  if (!model || !messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const anthropicBody = { model, max_tokens, messages };
  if (system) anthropicBody.system = system;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey.trim(),
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(anthropicBody)
    });
    const data = await r.json();
    return res.status(r.status).json(data);
  } catch (e) {
    return res.status(502).json({ error: 'Could not reach Claude API' });
  }
}
