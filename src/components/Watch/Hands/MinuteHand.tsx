import { css, cx } from "../../../../styled-system/css";
import { useWatchContext } from "../Root/WatchContext";
import { watchHandBase } from "./styles";

export default function MinuteHand() {
  const { handAngleData } = useWatchContext();

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
