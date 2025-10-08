import { createContext, useContext } from "react";
import { INITIAL_HAND_ANGLE } from "./constants";
import { HandAngleData } from "./types";

type MovementsContextValue = {
  currentTime: Date;
  handAngleData: HandAngleData;
};

const initialContextValue: MovementsContextValue = {
  currentTime: new Date(),
  handAngleData: {
    hourHand: INITIAL_HAND_ANGLE,
    minuteHand: INITIAL_HAND_ANGLE,
    secondHand: INITIAL_HAND_ANGLE,
  },
};

const MovementsContext =
  createContext<MovementsContextValue>(initialContextValue);

export const useMovementsContext = () => {
  const context = useContext(MovementsContext);

  if (context === undefined) {
    throw new Error(
      "useMovementsContext must be used within a MovementsProvider"
    );
  }
  return context;
};

export default MovementsContext;
