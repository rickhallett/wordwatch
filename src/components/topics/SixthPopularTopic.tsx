import { Topic } from '../../types';
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const SixthPopularTopic = ({
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
      className={`text-1xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h6 className="inline" onClick={onWordSelectEvent}>
        {topic.label}r
      </h6>
    </div>
  );
};
