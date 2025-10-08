import { css, cx } from "../../../../../styled-system/css";
import { useMovementsContext } from "../MovementsContext";
import { watchHandBase } from "./styles";

export default function MinuteHand() {
  const { handAngleData } = useMovementsContext();

  return (
    <div
      className={cx(
        watchHandBase,
        css({
          width: 220,
          height: 1,
          background: "black",
        })
      )}
      style={{ rotate: `${handAngleData.minuteHand}deg` }}
    />
  );
}
