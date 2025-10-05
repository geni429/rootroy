"use client";

import useWatch from "./useWatch";
import useIsClient from "@/hooks/useIsClient";
import { css } from "../../../styled-system/css";

export default function Watch() {
  const currentDate = useWatch();
  const isClient = useIsClient();

  if (!isClient) {
    return <div>--:--:--</div>;
  }
  return (
    <>
      <div>{currentDate.toISOString()}</div>
      <div
        className={css({
          width: 500,
          height: 500,
          borderRadius: "50%",
          position: "relative",
          background: "black",
        })}
      >
        <div
          className={css({
            width: 250,
            height: 2,
            background: "red",
            transformOrigin: "0 0",
            position: "absolute",
            top: "50%",
            left: "50%",
            translateY: "-50%",
          })}
          style={{
            rotate: `${(currentDate.getSeconds() / 60) * 360 - 90}deg`,
          }}
        />
      </div>
    </>
  );
}
