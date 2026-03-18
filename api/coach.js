/**
 * Proxies pitch coach to Mistral (Chat Completions). Key stays on the server.
 * Vercel → MISTRAL_API_KEY (required)
 * Optional: MISTRAL_MODEL (default mistral-small-latest)
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.MISTRAL_API_KEY;
  if (!apiKey || !apiKey.trim()) {
    return res.status(503).json({
      error: 'Add MISTRAL_API_KEY in Vercel → Settings → Environment Variables, then redeploy.'
    });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const { max_tokens = 512, system, messages } = body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request: messages[] required' });
  }

  const mistralMessages = [];
  if (system && String(system).trim()) {
    mistralMessages.push({ role: 'system', content: String(system) });
  }
  for (const m of messages) {
    if (m && (m.role === 'user' || m.role === 'assistant') && m.content != null) {
      mistralMessages.push({ role: m.role, content: String(m.content) });
    }
  }
  if (mistralMessages.length === 0) {
    return res.status(400).json({ error: 'No valid messages' });
  }

  const model = (process.env.MISTRAL_MODEL || 'mistral-small-latest').trim();

  try {
    const r = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey.trim()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages: mistralMessages,
        max_tokens: Math.min(Number(max_tokens) || 512, 4096)
      })
    });
    const data = await r.json();
    if (!r.ok) {
      const err =
        data.message ||
        (Array.isArray(data.detail) && data.detail[0]?.msg) ||
        (typeof data.detail === 'string' ? data.detail : null) ||
        JSON.stringify(data);
      return res.status(r.status).json({ error: err, raw: data });
    }
    const text = data.choices?.[0]?.message?.content || '';
    return res.status(200).json({ content: [{ type: 'text', text }] });
  } catch (e) {
    return res.status(502).json({ error: 'Could not reach Mistral API' });
  }
}
