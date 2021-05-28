import { Topic } from '../../types';
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const SecondPopularTopic = ({
  topic,
}: {
  topic: Topic;
}): JSX.Element => {
  const sentimentColour = mapSentimentColour(topic.sentimentScore);
  return (
    <div
      className={`text-5xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h2 className="inline">{topic.label}r</h2>
    </div>
  );
};
