"use client";

import useWatch from "./useWatch";
import useIsClient from "@/hooks/useIsClient";
import { css, cx } from "../../../styled-system/css";
import Image from "next/image";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
import HourHand from "./HourHand";

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
        <HourHand hours={currentDate.getHours()} />
        <MinuteHand minutes={currentDate.getMinutes()} />
        <SecondHand seconds={currentDate.getSeconds()} />
      </div>
    </>
  );
}
