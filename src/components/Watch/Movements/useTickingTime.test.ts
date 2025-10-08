import { expect, test, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useTickingTime from "./useTickingTime";

test("useTickingTime", () => {
  vi.useFakeTimers();
  const { result } = renderHook(() => useTickingTime());
  const startTime = result.current.getTime();

  const calcDiff = () => result.current.getTime() - startTime;

  act(() => vi.advanceTimersByTime(1000));
  expect(calcDiff()).toBe(1000);

  act(() => vi.advanceTimersByTime(999));
  expect(calcDiff()).toBe(1000);

  act(() => vi.advanceTimersByTime(1));
  expect(calcDiff()).toBe(2000);

  vi.useRealTimers();
});

test("useTickingTime call clearInterval after unmounted", () => {
  vi.useFakeTimers();
  const clearIntervalSpy = vi.spyOn(global, "clearInterval");

  const { unmount } = renderHook(() => useTickingTime());

  expect(clearIntervalSpy).not.toHaveBeenCalled();

  unmount();

  expect(clearIntervalSpy).toHaveBeenCalled();

  clearIntervalSpy.mockRestore();
  vi.useRealTimers();
});
