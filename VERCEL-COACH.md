# Pitch coach on Vercel (no API key for visitors)

1. **Vercel** → your project → **Settings** → **Environment Variables**
2. **`ANTHROPIC_API_KEY`** — your key from [Anthropic Console](https://console.anthropic.com/) (pitch coach AI).
3. **`N8N_COACH_WEBHOOK_URL`** — your n8n webhook (e.g. `https://….app.n8n.cloud/webhook/quadgrowth-coach`) so scorecards log to Slack/Sheets **without** exposing the URL in the page.
4. Apply to **Production** (and Preview if you want).
5. **Redeploy** so serverless functions see the new variables.

**Do not** put the real key in `.env` in Git — use Vercel’s UI only (or `.env.local` on your machine for `vercel dev`).

Local preview with functions: `npx vercel dev` and copy `.env.example` → `.env.local` with your key.
