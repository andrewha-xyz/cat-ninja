# The Contract

The three parts of the game only talk to each other through these shapes. Stick to them and nobody breaks anybody else's code.

To change this file, open a pull request and get an OK from all three owners.

## A cat

Made by `entities/`. Moved by `engine/`. Never touched by `ui/`.

```js
{
  id: 7,              // unique number
  type: "normal",     // which kind of cat, see entities/types.js
  x: 450, y: 640,     // position in pixels, (0, 0) is the top-left corner
  vx: 1.5, vy: -13,   // speed per frame; negative vy means flying up
  radius: 36,         // how big it is for hit detection
  points: 1,          // score for slicing it
  sliced: false,      // engine sets this to true when it's hit
  draw(ctx) { }       // draws the cat at its x, y
}
```

## A swipe

Made by `ui/input.js`. Read by `engine/`.

`input.get_swipe()` returns the piece of the blade that moved since last frame, or `null` if the player isn't swiping.

```js
{ x1: 100, y1: 200, x2: 130, y2: 190, stroke: 4 }
```

`stroke` goes up by one every time the player presses down, so all pieces of one swipe share the same number. Use it for combos.

## The game state

Owned by `engine/` (and `main.js`). `ui/` only reads it to draw.

```js
{
  score: 0,
  lives: 3,
  running: false,     // true while playing
  over: false,        // true after losing the last life
  cats: []            // every cat currently on screen
}
```

## Shared settings

`src/config.js` holds numbers everyone uses: screen size, gravity, spawn rate, lives. Read from it instead of typing numbers into your code.
