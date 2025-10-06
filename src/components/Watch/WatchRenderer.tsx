"use client";

import useIsClient from "@/hooks/useIsClient";
import Watch from "./Watch";
import WatchProvider from "./Root/WatchProvider";

export default function WatchRenderer() {
  const isClient = useIsClient();

  if (!isClient) {
    return <></>;
  }
  return (
    <WatchProvider>
      <Watch />
    </WatchProvider>
  );
}
