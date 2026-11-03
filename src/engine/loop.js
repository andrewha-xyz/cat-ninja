export function start_loop(update, draw) {
  let last = performance.now();
  function frame(now) {
    const dt = Math.min(now - last, 50);
    last = now;
    update(dt);
    draw();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
