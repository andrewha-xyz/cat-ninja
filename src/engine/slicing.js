export function hits(swipe, cat) {
  const { x1, y1, x2, y2 } = swipe;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy || 1;
  const t = Math.max(0, Math.min(1, ((cat.x - x1) * dx + (cat.y - y1) * dy) / len2));
  const px = x1 + t * dx;
  const py = y1 + t * dy;
  return (cat.x - px) ** 2 + (cat.y - py) ** 2 <= cat.radius ** 2;
}

// TODO(engine): bombs, combos — see src/engine/README.md
export function apply_slices(state, swipe) {
  if (!swipe) return [];
  const sliced = state.cats.filter(c => !c.sliced && hits(swipe, c));
  for (const cat of sliced) {
    cat.sliced = true;
    state.score += cat.points;
  }
  state.cats = state.cats.filter(c => !c.sliced);
  return sliced;
}
