/**
 * Forwards scorecard payload to n8n. URL stays secret on the server.
 * Vercel → Environment Variables → N8N_COACH_WEBHOOK_URL
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const target = process.env.N8N_COACH_WEBHOOK_URL;
  if (!target || !String(target).trim()) {
    return res.status(503).json({
      error: 'Add N8N_COACH_WEBHOOK_URL in Vercel → Environment Variables, then redeploy.'
    });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  try {
    const r = await fetch(String(target).trim(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!r.ok) {
      const t = await r.text();
      return res.status(502).json({
        error: 'n8n webhook error',
        status: r.status,
        detail: t.slice(0, 300)
      });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ error: 'Could not reach n8n webhook' });
  }
}
