import { css, cx } from "../../../../../styled-system/css";
import { useMovementsContext } from "../MovementsContext";
import { watchHandBase } from "./styles";

export default function HourHand() {
  const { handAngleData } = useMovementsContext();

  return (
    <div
      className={cx(
        watchHandBase,
        css({
          width: 180,
          height: 2,
          background: "black",
        })
      )}
      style={{ rotate: `${handAngleData.hourHand}deg` }}
    />
  );
}
