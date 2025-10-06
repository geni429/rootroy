import { css, cx } from "../../../../styled-system/css";
import { useWatchContext } from "../Root/WatchContext";
import { watchHandBase } from "./styles";

export default function SecondHand() {
  const { handAngleData } = useWatchContext();

  return (
    <div
      className={cx(
        watchHandBase,
        css({
          background: "#4b6140",
          width: 250,
          height: 0.5,
        })
      )}
      style={{ rotate: `${handAngleData.secondHand}deg` }}
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
