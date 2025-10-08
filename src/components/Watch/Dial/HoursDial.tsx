import { css } from "../../../../styled-system/css";

export default function HoursDial() {
  return (
    <div
      className={css({
        position: "absolute",
        width: "calc(100% - 64px)",
        height: "calc(100% - 64px)",
        borderRadius: "50%",
        zIndex: 2,
      })}
    >
      <div
        className={css({
          position: "absolute",
          inset: 0,
          background: "white",
          borderRadius: "50%",
          zIndex: 2,
        })}
      />
      {Array.from({ length: 60 }).map((_, index) => {
        if (index % 5 !== 0) {
          return null;
        }
        return (
          <div
            key={index}
            className={css({
              width: "calc(50% + 32px)",
              height: 1.5,
              background: "black",
              position: "absolute",
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
              transform: "translateY(-50%)",
            })}
            style={{
              rotate: `${index * 6}deg`,
            }}
          />
        );
      })}
    </div>
  );
}
