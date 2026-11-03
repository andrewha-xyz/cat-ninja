import { config } from "./config.js";
import { start_loop } from "./engine/loop.js";
import { step_physics } from "./engine/physics.js";
import { apply_slices } from "./engine/slicing.js";
import { create_spawner } from "./entities/spawner.js";
import { create_input } from "./ui/input.js";
import { draw_hud } from "./ui/hud.js";
import { draw_start, draw_game_over } from "./ui/screens.js";
import { play } from "./ui/sound.js";

const canvas = document.querySelector("#game");
canvas.width = config.width;
canvas.height = config.height;
const ctx = canvas.getContext("2d");
const input = create_input(canvas);
const state = { score: 0, lives: config.lives, running: false, over: false, cats: [] };
let spawner = create_spawner();

function reset() {
  Object.assign(state, { score: 0, lives: config.lives, running: true, over: false, cats: [] });
  spawner = create_spawner();
}

canvas.addEventListener("pointerdown", () => {
  if (!state.running) reset();
});

function update(dt) {
  if (!state.running) return;
  spawner.update(dt, state);
  const fallen = step_physics(state, dt / 16.67);
  for (const cat of fallen) {
    state.lives -= 1;
    play("miss");
  }
  const sliced = apply_slices(state, input.get_swipe());
  if (sliced.length) play("slice");
  if (state.lives <= 0) {
    state.running = false;
    state.over = true;
  }
}

function draw() {
  ctx.fillStyle = "#1d1b2f";
  ctx.fillRect(0, 0, config.width, config.height);
  for (const cat of state.cats) cat.draw(ctx);
  input.draw_trail(ctx);
  draw_hud(ctx, state);
  if (!state.running) state.over ? draw_game_over(ctx, state) : draw_start(ctx);
}

start_loop(update, draw);
