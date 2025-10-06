import { PropsWithChildren, useMemo } from "react";
import useWatch from "../useWatch";
import timeToHandAngle from "../Hands/timeToHandAngle";
import WatchContext from "./WatchContext";

export default function WatchProvider({ children }: PropsWithChildren) {
  const currentTime = useWatch();

  const handAngleData = useMemo(() => {
    return timeToHandAngle(currentTime);
  }, [currentTime]);

  return (
    <WatchContext.Provider value={{ currentTime, handAngleData }}>
      {children}
    </WatchContext.Provider>
  );
}
