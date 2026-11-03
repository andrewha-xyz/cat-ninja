import { config } from "../config.js";

export function create_input(canvas) {
  const trail = [];
  let down = false;
  let prev = null;
  let stroke = 0;

  function to_canvas(e) {
    const r = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) * canvas.width / r.width,
      y: (e.clientY - r.top) * canvas.height / r.height,
    };
  }

  canvas.addEventListener("pointerdown", e => {
    down = true;
    stroke += 1;
    trail.length = 0;
    prev = to_canvas(e);
    trail.push(prev);
  });
  canvas.addEventListener("pointermove", e => {
    if (!down) return;
    trail.push(to_canvas(e));
    if (trail.length > config.trail_length) trail.shift();
  });
  addEventListener("pointerup", () => { down = false; });

  return {
    get_swipe() {
      const p = trail[trail.length - 1];
      if (!down || !p || !prev || p === prev) return null;
      const swipe = { x1: prev.x, y1: prev.y, x2: p.x, y2: p.y, stroke };
      prev = p;
      return swipe;
    },
    draw_trail(ctx) {
      if (!down) trail.shift();
      if (trail.length < 2) return;
      ctx.save();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowColor = "#8ef";
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);
      for (const p of trail) ctx.lineTo(p.x, p.y);
      ctx.stroke();
      ctx.restore();
    },
  };
}
