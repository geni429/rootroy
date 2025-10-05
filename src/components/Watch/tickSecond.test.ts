import { expect, test, vi } from "vitest";
import { tickSecond } from "./tickSecond";

test("ticking", () => {
  vi.useFakeTimers();
  const callback = vi.fn();

  const interval = tickSecond(callback);

  vi.advanceTimersByTime(1000);
  expect(callback).toHaveBeenCalledTimes(1);

  vi.advanceTimersByTime(999);
  expect(callback).toHaveBeenCalledTimes(1);

  vi.advanceTimersByTime(1);
  expect(callback).toHaveBeenCalledTimes(2);

  clearInterval(interval);
  vi.useRealTimers();
});
