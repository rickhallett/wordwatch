import { Topic } from '../../types';
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const FifthPopularTopic = ({ topic }: { topic: Topic }): JSX.Element => {
  const sentimentColour = mapSentimentColour(topic.sentimentScore);
  return (
    <div
      className={`text-2xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h5 className="inline">{topic.label}</h5>
    </div>
  );
};
