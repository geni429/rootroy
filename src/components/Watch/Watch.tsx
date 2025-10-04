"use client";

import useWatch from "./useWatch";
import useIsClient from "@/hooks/useIsClient";

export default function Watch() {
  const currentDate = useWatch();
  const isClient = useIsClient();

  if (!isClient) {
    return <div>--:--:--</div>;
  }
  return <div>{currentDate.toISOString()}</div>;
}
