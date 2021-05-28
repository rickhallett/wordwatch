import { Topic } from '../../types';
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const ForthPopularTopic = ({ topic }: { topic: Topic }): JSX.Element => {
  const sentimentColour = mapSentimentColour(topic.sentimentScore);
  return (
    <div
      className={`text-3xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h4 className="inline">{topic.label}r</h4>
    </div>
  );
};
