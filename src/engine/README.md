# Engine — the brain 🧠

**Owner:** the 15 y.o.

You own the game loop, physics, hit detection, and the rules. Everyone else's code runs because yours calls it.

## Files

- `loop.js` — calls `update(dt)` and `draw()` about 60 times a second
- `physics.js` — moves cats with gravity, removes the ones that fell off the screen
- `slicing.js` — checks if a swipe line crosses a cat (line-to-circle distance), adds points

## Tasks

Do them in order. Each one is a pull request.

1. **Bombs.** Slicing a cat with `bomb: true` costs a life instead of giving points. A bomb falling off the screen costs nothing. Agree with entities on the `bomb` field, add it to `CONTRACT.md`.
2. **Combos.** Slice 3 or more cats in one swipe (same `stroke`) and get a bonus point per cat. Put the combo size in the state so ui can show "COMBO x4!".
3. **High score.** Keep `state.best` and save it in `localStorage` so it survives a page reload.
4. **Pause.** Press `P` or switch browser tabs and the game pauses.
5. **Getting harder.** Every 10 points, raise `state.level`. Agree with entities how the spawner uses it.
6. **Slow-mo** (stretch). On a combo of 5+, slow time to 30% for one second.

## Try asking Claude

> explain how `hits()` in slicing.js works, draw me a picture with text
