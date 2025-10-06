export enum TimeUnit {
  Hour,
  Minute,
  Second,
}

/**
 * 기본적으로 시계핸드는 가로로 렌더링이 되기 떄문에, (3시 방향)
 * 시작각도는 12시 방향으로 설정하기 위해서 -90deg로 설정한다.
 */
export const INITIAL_HAND_ANGLE = -90;
