import { css } from "../../../../styled-system/css";

export default function BarIndex({ index, width, height }: BarIndexProps) {
  return (
    <div
      className={css({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateY(-50%)",
        background: "black",
        transformOrigin: "0 0",
      })}
      style={{
        width: `calc(50% + ${width}px)`,
        height: `${height}px`,
        rotate: `${index * 6}deg`,
      }}
    />
  );
}

type BarIndexProps = {
  index: number;
  width: number;
  height: number;
};
