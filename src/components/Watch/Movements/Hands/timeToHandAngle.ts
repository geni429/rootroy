import { hoursToSeconds, minutesToSeconds } from "date-fns";
import { INITIAL_HAND_ANGLE } from "../constants";
import { HandAngleData } from "../types";

export function getHourHandCompletionRatio(
  hours: number,
  minutes: number,
  seconds: number
) {
  return (
    (hoursToSeconds(hours) + minutesToSeconds(minutes) + seconds) /
    (60 * 60 * 12)
  );
}

export function getMinuteHandCompletionRatio(minutes: number, seconds: number) {
  return (minutesToSeconds(minutes) + seconds) / (60 * 60);
}

export function getSecondHandCompletionRatio(seconds: number) {
  return seconds / 60;
}

export function hoursToHandAngle(
  hours: number,
  minutes: number,
  seconds: number
) {
  return calcHandAngle(getHourHandCompletionRatio(hours, minutes, seconds));
}

export function minutesToHandAngle(minutes: number, seconds: number) {
  return calcHandAngle(getMinuteHandCompletionRatio(minutes, seconds));
}

export function secondsToHandAngle(seconds: number) {
  return calcHandAngle(getSecondHandCompletionRatio(seconds));
}

function calcHandAngle(completionRatio: number) {
  return INITIAL_HAND_ANGLE + completionRatio * 360;
}

export default function timeToHandAngle(current: Date): HandAngleData {
  const seconds = current.getSeconds();
  const minutes = current.getMinutes();
  const hours = current.getHours();

  return {
    hourHand: hoursToHandAngle(hours, minutes, seconds),
    minuteHand: minutesToHandAngle(minutes, seconds),
    secondHand: secondsToHandAngle(seconds),
  };
}
