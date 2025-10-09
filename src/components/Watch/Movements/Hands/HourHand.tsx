import { css, cx } from "../../../../../styled-system/css";
import { useMovementsContext } from "../MovementsContext";
import { HOUR_HAND_HEIGHT } from "./constants";
import { watchHandBase } from "./styles";

export default function HourHand() {
  const { handAngleData } = useMovementsContext();

  return (
    <div
      className={cx(
        watchHandBase,
        css({
          background: "black",
          width: "33%",
        })
      )}
      style={{
        height: `${HOUR_HAND_HEIGHT}px`,
        rotate: `${handAngleData.hourHand}deg`,
      }}
    />
  );
}
