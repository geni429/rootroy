import { SECOND_HAND_HEIGHT } from "../Movements/Hands/constants";
import BarIndex from "./BarIndex";
import { MINUTE_BAR_INDEX_WIDTH } from "./constants";
import IndicesWrapper from "./IndicesWrapper";

export default function MinuteIndices() {
  return (
    <IndicesWrapper barIndexWidth={MINUTE_BAR_INDEX_WIDTH}>
      {Array.from({ length: 60 }).map((_, index) => {
        if (index % 5 === 0) {
          return null;
        }
        return (
          <BarIndex
            key={index}
            index={index}
            width={MINUTE_BAR_INDEX_WIDTH}
            height={SECOND_HAND_HEIGHT}
          />
        );
      })}
    </IndicesWrapper>
  );
}
