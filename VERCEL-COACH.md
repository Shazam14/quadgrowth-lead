# Pitch coach on Vercel (no API key for visitors)

1. **Vercel** → your project → **Settings** → **Environment Variables**
2. Add: **Name** `ANTHROPIC_API_KEY` → **Value** your key from [Anthropic Console](https://console.anthropic.com/)
3. Apply to **Production** (and Preview if you want).
4. **Redeploy** (Deployments → ⋮ → Redeploy) so the new variable is picked up.

**Do not** put the real key in `.env` in Git — use Vercel’s UI only (or `.env.local` on your machine for `vercel dev`).

Local preview with functions: `npx vercel dev` and copy `.env.example` → `.env.local` with your key.
