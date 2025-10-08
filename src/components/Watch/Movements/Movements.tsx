import MovementsProvider from "./MovementsProvider";
import MinuteHand from "./Hands/MinuteHand";
import HourHand from "./Hands/HourHand";
import SecondHand from "./Hands/SecondHand";

export default function Movements() {
  return (
    <MovementsProvider>
      <HourHand />
      <MinuteHand />
      <SecondHand />
    </MovementsProvider>
  );
}
