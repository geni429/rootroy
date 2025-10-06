import { css, cx } from "../../../../styled-system/css";
import { useWatchContext } from "../Root/WatchContext";
import { watchHandBase } from "./styles";

export default function HourHand() {
  const { handAngleData } = useWatchContext();

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
