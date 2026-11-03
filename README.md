# Cat Ninja 🐱

Fruit Ninja, but with cats. Swipe to catch them before they fall. Sliced cats go *poof* — nobody gets hurt.

Built by three kids and their dad, with [Claude Code](https://claude.com/claude-code) as the fourth teammate.

**Play it:** https://andrewha-xyz.github.io/cat-ninja/

## Run it on your computer

```bash
npx serve .
```

Then open http://localhost:3000. (Double-clicking `index.html` won't work — the browser blocks modules from files. You need the little server.)

## Who builds what

| Folder | Owner | What it does |
|---|---|---|
| [`src/engine/`](src/engine/README.md) | 15 y.o. | the brain: game loop, gravity, hit detection, rules |
| [`src/entities/`](src/entities/README.md) | 12 y.o. | the cats: types, drawing, how they launch |
| [`src/ui/`](src/ui/README.md) | 10 y.o. | what you see and hear: blade trail, score, screens, sounds |
| `main.js`, `config.js`, `index.html` | dad + 15 y.o. | glue that plugs the three parts together |

Everyone reads [`CONTRACT.md`](CONTRACT.md). It says what a cat looks like, what a swipe looks like, and what the game state looks like. As long as everyone sticks to it, you can all work at the same time without breaking each other.

## How we work

1. **Pick a task** from [Issues](https://github.com/andrewha-xyz/cat-ninja/issues) with your label (`engine`, `cats`, `ui`).
2. **Make a branch** — never work on `main`:
   ```bash
   git checkout main && git pull
   git checkout -b cats/golden-cat
   ```
3. **Open Claude Code** in the repo and tell it what you want, for example:
   > read src/entities/README.md and do task 1, the golden cat
4. **Play the game** to check it works. Ask Claude to explain anything you don't get.
5. **Commit and push**, then open a pull request:
   ```bash
   git add -A && git commit -m "golden cat worth 5 points"
   git push -u origin cats/golden-cat
   gh pr create --fill
   ```
6. **Someone else reviews** — another kid or dad. They play your branch and leave a comment.
7. **Dad merges.** The game on the website updates by itself a minute later.

## Rules

- Only change files in your own folder. Need something from someone else's part? Ask them, or open an issue.
- Changing `CONTRACT.md` needs everyone to say OK in the pull request.
- Small pull requests. One feature each. Easier to review, easier to fix.
- No gore. Sliced cats poof into sparkles.
