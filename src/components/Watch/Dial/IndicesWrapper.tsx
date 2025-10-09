import { PropsWithChildren } from "react";
import { css } from "../../../../styled-system/css";

export default function IndicesWrapper({
  barIndexWidth,
  children,
}: PropsWithChildren<{
  barIndexWidth: number;
}>) {
  return (
    <div
      className={css({
        position: "absolute",
        borderRadius: "50%",
      })}
      style={{
        width: `calc(100% - ${barIndexWidth * 2}px)`,
        height: `calc(100% - ${barIndexWidth * 2}px)`,
      }}
    >
      {children}
      <div
        className={css({
          position: "absolute",
          background: "white",
          borderRadius: "50%",
          inset: 0,
        })}
      />
    </div>
  );
}
