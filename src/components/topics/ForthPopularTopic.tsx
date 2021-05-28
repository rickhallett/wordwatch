import { Topic } from '../../types';
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const ForthPopularTopic = ({
  topic,
  onWordSelect,
}: {
  topic: Topic;
  onWordSelect: any;
}): JSX.Element => {
  const sentimentColour = mapSentimentColour(topic.sentimentScore);

  const onWordSelectEvent = (event: any) => {
    onWordSelect(event);
  };

  return (
    <div
      className={`text-3xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h4 className="inline" onClick={onWordSelectEvent}>
        {topic.label}r
      </h4>
    </div>
  );
};
