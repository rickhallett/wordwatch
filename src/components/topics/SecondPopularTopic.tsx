import React from "react";

import { mapSentimentColour } from "../../util/mapSentimentColour";

export const SecondPopularTopic = ({
  sentiment,
}: {
  sentiment: string;
}): JSX.Element => {
  const sentimentColour = mapSentimentColour(sentiment);
  return (
    <div
      className={`text-5xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h2 className="inline">Second most popular</h2>
    </div>
  );
};
