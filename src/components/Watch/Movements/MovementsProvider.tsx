import { PropsWithChildren, useMemo } from "react";
import useTickingTime from "./useTickingTime";
import MovementsContext from "./MovementsContext";
import timeToHandAngle from "./Hands/timeToHandAngle";

export default function MovementsProvider({ children }: PropsWithChildren) {
  const currentTime = useTickingTime();

  const handAngleData = useMemo(() => {
    return timeToHandAngle(currentTime);
  }, [currentTime]);

  return (
    <MovementsContext.Provider value={{ currentTime, handAngleData }}>
      {children}
    </MovementsContext.Provider>
  );
}
