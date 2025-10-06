import { createContext, useContext } from "react";
import { INITIAL_HAND_ANGLE } from "../constants";
import { HandAngleData } from "../types";

type WatchContextValue = {
  currentTime: Date;
  handAngleData: HandAngleData;
};

const initialContextValue: WatchContextValue = {
  currentTime: new Date(),
  handAngleData: {
    hourHand: INITIAL_HAND_ANGLE,
    minuteHand: INITIAL_HAND_ANGLE,
    secondHand: INITIAL_HAND_ANGLE,
  },
};

const WatchContext = createContext<WatchContextValue>(initialContextValue);

export const useWatchContext = () => {
  const context = useContext(WatchContext);

  if (context === undefined) {
    throw new Error("useWatchContext must be used within a WatchProvider");
  }
  return context;
};

export default WatchContext;
