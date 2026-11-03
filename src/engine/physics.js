import { config } from "../config.js";

export function step_physics(state, k) {
  for (const cat of state.cats) {
    cat.x += cat.vx * k;
    cat.vy += config.gravity * k;
    cat.y += cat.vy * k;
  }
  const fallen = state.cats.filter(c => c.vy > 0 && c.y > config.height + c.radius + 20);
  state.cats = state.cats.filter(c => !fallen.includes(c));
  return fallen;
}
