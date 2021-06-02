import { Topic } from "../../types";
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const ThirdPopularTopic = ({
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
      className={`text-4xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h3
        className="inline"
        onClick={onWordSelectEvent}
        data-testid="topic-element"
      >
        {topic.label}
      </h3>
    </div>
  );
};
