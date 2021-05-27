import React from "react";

import { mapSentimentColour } from "../../util/mapSentimentColour";

export const SixthPopularTopic = ({
  sentiment,
}: {
  sentiment: string;
}): JSX.Element => {
  const sentimentColour = mapSentimentColour(sentiment);
  return (
    <div
      className={`text-1xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h6 className="inline">Sixth most popular</h6>
    </div>
  );
};
