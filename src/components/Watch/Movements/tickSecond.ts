export function tickSecond(callback: () => void) {
  return setInterval(callback, 1000);
}
