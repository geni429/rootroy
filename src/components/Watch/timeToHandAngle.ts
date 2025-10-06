import { TimeUnit } from "./constants";

export function getHourHandCompletionRatio(hours: number) {
  return (hours % 24) / 24;
}

export function getMinuteHandCompletionRatio(minutes: number) {
  return (minutes % 60) / 60;
}

export function getSecondHandCompletionRatio(seconds: number) {
  return (seconds % 60) / 60;
}

export function hoursToHandAngle(hours: number) {
  return calcHandAngle(getHourHandCompletionRatio(hours));
}

export function minutesToHandAngle(minutes: number) {
  return calcHandAngle(getMinuteHandCompletionRatio(minutes));
}

export function secondsToHandAngle(seconds: number) {
  return calcHandAngle(getSecondHandCompletionRatio(seconds));
}

function calcHandAngle(completionRatio: number) {
  /**
   * 기본적으로 핸드는 가로로 렌더링이 되기 떄문에, (3시 방향)
   * 시작각도는 12시 방향으로 설정하기 위해서 -90deg로 설정한다.
   */
  const START_ANGEL = -90;
  return START_ANGEL + completionRatio * 360;
}

export default function timeToHandAngle(time: number, unit: TimeUnit) {
  switch (unit) {
    case TimeUnit.Hour:
      return hoursToHandAngle(time);
    case TimeUnit.Minute:
      return minutesToHandAngle(time);
    case TimeUnit.Second:
      return secondsToHandAngle(time);
    default:
      throw new Error("Please specify proper unit type");
  }
}
