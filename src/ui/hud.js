import { config } from "../config.js";

export function draw_hud(ctx, state) {
  ctx.fillStyle = "#fff";
  ctx.font = "bold 32px system-ui";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`score ${state.score}`, 20, 16);
  ctx.textAlign = "right";
  ctx.fillText("❤️".repeat(Math.max(state.lives, 0)), config.width - 20, 16);
}
