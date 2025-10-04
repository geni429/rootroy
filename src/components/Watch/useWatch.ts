"use client";

import { useEffect, useState } from "react";
import { tickSecond } from "./tickSecond";

export default function useWatch() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = tickSecond(() => setCurrentDate(new Date()));

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentDate;
}
