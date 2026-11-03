# Cat Ninja — notes for Claude

A browser game made by three kids (ages 10, 12, 15) with their dad. They're learning to code with you. Fruit Ninja with cats.

## Who you're helping

Ask who you're working with if it isn't clear. Explain what you did in plain words; the youngest is 10. Keep code short, readable, and boring — clear names over clever tricks. When you finish, tell them how to see the change in the game.

## Ownership

- `src/engine/` — the 15 y.o.
- `src/entities/` — the 12 y.o.
- `src/ui/` — the 10 y.o.
- `src/main.js`, `src/config.js`, `index.html`, `style.css` — shared; change only when the task needs it and say so.

Only edit the folder of the person you're helping. If a task needs another folder or a change to `CONTRACT.md`, stop and explain what change is needed and who has to agree.

## Tech

- Plain HTML, `<canvas>`, and JavaScript ES modules. No frameworks, no npm packages, no build step. Don't add any.
- Functions are `snake_case`. Each module exports plain functions or small objects.
- Every shape passed between folders is in `CONTRACT.md`. Follow it.
- Run with `npx serve .` and open http://localhost:3000.

## Git

- Work on a branch named `<area>/<feature>`, like `ui/mute-button`. Never commit to `main`.
- Help them commit, push, and open a PR with `gh pr create`. Write the PR description so the other kids can understand it.

## Tone of the game

Cartoon cats. No gore: sliced cats poof into sparkles or hearts.
