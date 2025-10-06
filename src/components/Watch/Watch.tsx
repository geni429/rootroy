"use client";

import { css } from "../../../styled-system/css";
import Image from "next/image";
import MinuteHand from "./Hands/MinuteHand";
import SecondHand from "./Hands/SecondHand";
import HourHand from "./Hands/HourHand";

export default function Watch() {
  return (
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
      <HourHand />
      <MinuteHand />
      <SecondHand />
    </div>
  );
}
