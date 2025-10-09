import { css, cx } from "../../../../../styled-system/css";
import { useMovementsContext } from "../MovementsContext";
import { MINUTE_HAND_HEIGHT } from "./constants";
import { watchHandBase } from "./styles";

export default function MinuteHand() {
  const { handAngleData } = useMovementsContext();

  return (
    <div
      className={cx(
        watchHandBase,
        css({
          background: "black",
          width: "45%",
        })
      )}
      style={{
        height: `${MINUTE_HAND_HEIGHT}px`,
        rotate: `${handAngleData.minuteHand}deg`,
      }}
    />
  );
}
