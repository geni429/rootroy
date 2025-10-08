import { PropsWithChildren } from "react";
import Image from "next/image";
import { css } from "../../../../styled-system/css";
import HourIndices from "./HourIndices";
import MinuteIndices from "./MinuteIndices";

export default function Dial({ children }: PropsWithChildren) {
  return (
    <div
      className={css({
        width: 500,
        height: 500,
        borderRadius: "50%",
        position: "relative",
        background: "white",
        border: "1px solid gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
      <MinuteIndices />
      <HourIndices />
      {children}
    </div>
  );
}
