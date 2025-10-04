"use client";

import { useEffect, useState } from "react";

export default function useWatch() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);

  return currentDate;
}
