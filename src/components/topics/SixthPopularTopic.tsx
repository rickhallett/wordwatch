import { Topic } from '../../types';
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const SixthPopularTopic = ({ topic }: { topic: Topic }): JSX.Element => {
  const sentimentColour = mapSentimentColour(topic.sentimentScore);
  return (
    <div
      className={`text-1xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h6 className="inline">{topic.label}r</h6>
    </div>
  );
};
