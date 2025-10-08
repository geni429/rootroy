"use client";

import { css } from "../../../styled-system/css";
import Image from "next/image";
import MinuteHand from "./Movements/Hands/MinuteHand";
import HourHand from "./Movements/Hands/HourHand";
import SecondHand from "./Movements/Hands/SecondHand";
import MovementsProvider from "./Movements/MovementsProvider";

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
      <MovementsProvider>
        <HourHand />
        <MinuteHand />
        <SecondHand />
      </MovementsProvider>
    </div>
  );
}
