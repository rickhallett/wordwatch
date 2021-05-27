import { mapSentimentColour } from "../../util/mapSentimentColour";

export const ThirdPopularTopic = ({
  sentiment,
}: {
  sentiment: string;
}): JSX.Element => {
  const sentimentColour = mapSentimentColour(sentiment);
  return (
    <div
      className={`text-4xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h3 className="inline">Third most popular</h3>
    </div>
  );
};
