import { Topic } from '../../types';
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const ThirdPopularTopic = ({ topic }: { topic: Topic }): JSX.Element => {
  const sentimentColour = mapSentimentColour(topic.sentimentScore);
  return (
    <div
      className={`text-4xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h3 className="inline">{topic.label}</h3>
    </div>
  );
};
