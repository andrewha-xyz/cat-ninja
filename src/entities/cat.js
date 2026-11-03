import { cat_types } from "./types.js";

let next_id = 1;

export function make_cat(type_name, x, y, vx, vy) {
  const type = cat_types[type_name];
  return {
    id: next_id++,
    type: type_name,
    x, y, vx, vy,
    radius: type.radius,
    points: type.points,
    sliced: false,
    draw(ctx) {
      ctx.font = `${this.radius * 2}px serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(type.emoji, this.x, this.y);
    },
  };
}
