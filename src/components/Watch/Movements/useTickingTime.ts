"use client";

import { useEffect, useState } from "react";
import { tickSecond } from "./tickSecond";

export default function useTickingTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = tickSecond(() => setCurrentTime(new Date()));

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentTime;
}
