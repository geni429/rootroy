import { css } from "../../../../styled-system/css";

export default function MinutesDial() {
  return (
    <div
      className={css({
        position: "absolute",
        width: "calc(100% - 32px)",
        height: "calc(100% - 32px)",
        borderRadius: "50%",
        zIndex: 1,
      })}
    >
      <div
        className={css({
          position: "absolute",
          inset: 0,
          background: "white",
          borderRadius: "50%",
          zIndex: 1,
        })}
      />
      {Array.from({ length: 60 }).map((_, index) => {
        if (index % 5 === 0) {
          return null;
        }
        return (
          <div
            key={index}
            className={css({
              width: "calc(50% + 16px)",
              height: 0.5,
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
