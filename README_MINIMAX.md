MiniMax integration

1. Create `.env.local` in project root (do NOT commit):

```
OPENAI_API_KEY=sk-...   # your key
OPENAI_API_URL=https://api.openai.com/v1/responses
OPENAI_MODEL=mini-max
```

2. Start dev server:

```bash
npm run dev
```

3. Open the test page:

- http://localhost:3001/chat

Notes:
- The server route `/api/generate` will forward your prompt to the configured `OPENAI_API_URL` using `OPENAI_MODEL`.
- Keep your key secret. If exposed, rotate it immediately.
