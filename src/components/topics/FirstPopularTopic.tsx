import { Topic } from "../../types";
import { mapSentimentColour } from "../../util/mapSentimentColour";

export const FirstPopularTopic = ({
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
      className={`text-6xl text-${sentimentColour}-400 max-w-max inline p-2`}
    >
      <h1
        className="inline"
        onClick={onWordSelectEvent}
        data-testid="first-popular-topic-element"
      >
        {topic.label}
      </h1>
    </div>
  );
};
