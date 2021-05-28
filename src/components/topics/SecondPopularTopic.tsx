import { Topic } from '../../types';
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const SecondPopularTopic = ({
  topic,
  onWordSelect,
}: {
  topic: Topic;
  onWordSelect: any;
}): JSX.Element => {
  const sentimentColour = mapSentimentColour(topic.sentimentScore);

  const onWordSelectEvent = (event: any) => {
    onWordSelect(event, topic.id);
  };

  return (
    <div
      className={`text-5xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h2 className="inline" onClick={onWordSelectEvent}>{topic.label}</h2>
    </div>
  );
};
