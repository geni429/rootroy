import { css, cx } from "../../../styled-system/css";
import { TimeUnit } from "./constants";
import { watchHandBase } from "./styles";
import timeToHandAngle from "./timeToHandAngle";

export default function HourHand({ hours }: { hours: number }) {
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
      style={{ rotate: `${timeToHandAngle(hours, TimeUnit.Hour)}deg` }}
    />
  );
}
