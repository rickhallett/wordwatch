import { mapSentimentColour } from '../../util/mapSentimentColour';

export const FirstPopularTopic = ({sentiment}: {sentiment:string}): JSX.Element => {
  const sentimentColour = mapSentimentColour(sentiment);
  return (
    <div
      className={`text-6xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h1 className="inline">Most popular</h1>
    </div>
  );
}