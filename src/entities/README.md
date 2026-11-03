# Entities — the cats 🐱

**Owner:** the 12 y.o.

You own every cat: what kinds exist, how they look, and how they get thrown onto the screen.

## Files

- `types.js` — the list of cat kinds and their emoji, points, size
- `cat.js` — `make_cat()` builds one cat object (shape is in `CONTRACT.md`)
- `spawner.js` — decides when and where cats launch

## Tasks

Do them in order. Each one is a pull request.

1. **Golden cat 😻.** Worth 5 points, appears 1 time in 10.
2. **Bomb 💣.** Add a bomb type with `bomb: true` and 0 points. Agree with engine on the field.
3. **Waves.** Sometimes throw 2–4 cats at the same time.
4. **Spin.** Cats rotate while they fly. Hint: `ctx.save()`, `ctx.translate()`, `ctx.rotate()`, `ctx.restore()`.
5. **Poof.** Sliced cats burst into ✨ that fade out instead of vanishing. This needs a contract change (engine removes sliced cats right now) — write the proposal in a pull request to `CONTRACT.md` first.
6. **Your own cat** (stretch). Invent a new cat: a speedy one, a tiny one, one that splits in two.

## Try asking Claude

> how does the spawner choose where a cat starts and how fast it flies?
