import Watch from "@/components/Watch/Watch";
import { css } from "../../styled-system/css";
import Image from "next/image";

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
        <Image src="/rootroy-logo.png" alt="Logo" width={64} height={64} />
        <h1>RootRoy</h1>
      </div>
      <Watch />
    </div>
  );
}
