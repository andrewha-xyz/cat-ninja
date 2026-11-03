import { config } from "../config.js";

function banner(ctx, title, subtitle) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
  ctx.fillRect(0, 0, config.width, config.height);
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 64px system-ui";
  ctx.fillText(title, config.width / 2, config.height / 2 - 30);
  ctx.font = "24px system-ui";
  ctx.fillText(subtitle, config.width / 2, config.height / 2 + 30);
}

export function draw_start(ctx) {
  banner(ctx, "Cat Ninja 🐱", "click or tap to start");
}

export function draw_game_over(ctx, state) {
  banner(ctx, "game over", `score ${state.score} · tap to play again`);
}
