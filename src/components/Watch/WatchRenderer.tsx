"use client";

import useIsClient from "@/hooks/useIsClient";
import Watch from "./Watch";

export default function WatchRenderer() {
  const isClient = useIsClient();

  if (!isClient) {
    return <></>;
  }
  return <Watch />;
}
