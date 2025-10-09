import { css, cx } from "../../../../../styled-system/css";
import { useMovementsContext } from "../MovementsContext";
import { SECOND_HAND_HEIGHT } from "./constants";
import { watchHandBase } from "./styles";

export default function SecondHand() {
  const { handAngleData } = useMovementsContext();

  return (
    <div
      className={cx(
        watchHandBase,
        css({
          background: "#4b6140",
          width: "50%",
        })
      )}
      style={{
        height: `${SECOND_HAND_HEIGHT}px`,
        rotate: `${handAngleData.secondHand}deg`,
      }}
    >
      <div
        className={css({
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translate(-50%, -50%)",
          background: "#4b6140",
          width: 6,
          height: 6,
          borderRadius: "50%",
        })}
      />
    </div>
  );
}
