"use client";

import useWatch from "./useWatch";
import useIsClient from "@/hooks/useIsClient";
import { css, cx } from "../../../styled-system/css";
import Image from "next/image";

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
          background: "white",
          border: "1px solid gray",
        })}
      >
        <Image
          src="/rootroy-logo.png"
          alt="Logo"
          width={64}
          height={64}
          className={css({
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
          })}
        />
        <div
          className={cx(
            watchHandBase,
            css({
              width: 150,
              height: 2,
              background: "black",
            })
          )}
          style={{
            rotate: `${(currentDate.getHours() / 60) * 360 - 90}deg`,
          }}
        />
        <div
          className={cx(
            watchHandBase,
            css({
              width: 220,
              height: 1,
              background: "black",
            })
          )}
          style={{
            rotate: `${(currentDate.getMinutes() / 60) * 360 - 90}deg`,
          }}
        />
        <div
          className={cx(
            watchHandBase,
            css({
              background: "#4b6140",
              width: 250,
              height: 0.5,
            })
          )}
          style={{
            rotate: `${(currentDate.getSeconds() / 60) * 360 - 90}deg`,
          }}
        />
      </div>
    </>
  );
}

const watchHandBase = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transformOrigin: "0 0",
  transform: "translateY(-50%)",
});
