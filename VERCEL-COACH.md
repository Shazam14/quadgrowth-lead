# Pitch coach on Vercel (Mistral — no API key for visitors)

1. **Vercel** → your project → **Settings** → **Environment Variables**
2. **`MISTRAL_API_KEY`** — from [La Plateforme / Mistral](https://console.mistral.ai/) (pitch coach AI).
3. Optional **`MISTRAL_MODEL`** — defaults to `mistral-small-latest`. Try `mistral-large-latest` for heavier dialogue (costs more).
4. **`N8N_COACH_WEBHOOK_URL`** — n8n webhook for scorecard logging (Slack/Sheets).
5. **Redeploy** after changing env vars.

The clinic owner’s lines are read aloud by the **browser** (free; quality depends on device). Dialogue text is always from **Mistral**.

Remove old **`ANTHROPIC_API_KEY`** from Vercel if you no longer use it.

Local: `npx vercel dev` with `.env.local` from `.env.example`.
