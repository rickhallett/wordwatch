import { Topic } from '../../types';
import { mapSentimentColour } from '../../util/mapSentimentColour';

export const FirstPopularTopic = ({topic}: {topic: Topic}): JSX.Element => {
  const sentimentColour = mapSentimentColour(topic.sentimentScore);
  return (
    <div
      className={`text-6xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h1 className="inline">{topic.label}</h1>
    </div>
  );
}