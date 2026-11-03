import { config } from "../config.js";
import { make_cat } from "./cat.js";

export function create_spawner() {
  let since = 0;
  return {
    update(dt, state) {
      since += dt;
      if (since < config.spawn_every_ms) return;
      since = 0;
      const x = 100 + Math.random() * (config.width - 200);
      const vx = (config.width / 2 - x) / 120 + (Math.random() - 0.5) * 2;
      const vy = -(12 + Math.random() * 3);
      state.cats.push(make_cat("normal", x, config.height + 40, vx, vy));
    },
  };
}
