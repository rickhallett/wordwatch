import React from "react";

import { mapSentimentColour } from "../../util/mapSentimentColour";

export const FifthPopularTopic = ({
  sentiment,
}: {
  sentiment: string;
}): JSX.Element => {
  const sentimentColour = mapSentimentColour(sentiment);
  return (
    <div
      className={`text-2xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h5 className="inline">Fifth most popular</h5>
    </div>
  );
};
