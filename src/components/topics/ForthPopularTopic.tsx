import React from "react";

import { mapSentimentColour } from "../../util/mapSentimentColour";

export const ForthPopularTopic = ({
  sentiment,
}: {
  sentiment: string;
}): JSX.Element => {
  const sentimentColour = mapSentimentColour(sentiment);
  return (
    <div
      className={`text-3xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h4 className="inline">Forth most popular</h4>
    </div>
  );
};
