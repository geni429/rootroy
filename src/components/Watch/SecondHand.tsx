import { css, cx } from "../../../styled-system/css";
import { TimeUnit } from "./constants";
import { watchHandBase } from "./styles";
import timeToHandAngle from "./timeToHandAngle";

export default function SecondHand({ seconds }: { seconds: number }) {
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
      style={{ rotate: `${timeToHandAngle(seconds, TimeUnit.Second)}deg` }}
    />
  );
}
