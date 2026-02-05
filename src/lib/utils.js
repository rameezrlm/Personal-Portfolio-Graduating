export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
