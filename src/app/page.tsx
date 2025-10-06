import Watch from "@/components/Watch/Watch";
import { css } from "../../styled-system/css";
import WatchRenderer from "@/components/Watch/WatchRenderer";

export default function Home() {
  return (
    <div
      className={css({ width: 600, marginLeft: "auto", marginRight: "auto" })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
        })}
      >
        <h1>RootRoy</h1>
      </div>
      <WatchRenderer />
    </div>
  );
}
