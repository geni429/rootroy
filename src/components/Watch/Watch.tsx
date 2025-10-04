"use client";

import useWatch from "./useWatch";

export default function Watch() {
  const currentDate = useWatch();

  return <div>{currentDate.toISOString()}</div>;
}
