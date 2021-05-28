import React from "react";
import parse from "html-react-parser";
import { Topic } from "../../types";
import { mapSentimentColour } from "../../util/mapSentimentColour";
import { getWordHeadingTags } from "../../util/getWordHeadingTags";
import { getTextSize } from "../../util/getTextSize";

export const TopicElement = ({
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

  const { openingTag, closeOpeningTag, closingTag } = getWordHeadingTags(topic);
  const textSize = getTextSize(topic);

  const element = `${`${openingTag}`}className="inline" onClick={${onWordSelectEvent}} ${closeOpeningTag} ${
    topic.label
  } ${closingTag}`;

  // console.log(element);

  // function createMarkup(topic: Topic) {
  //   return {
  //     __html: element,
  //   };
  // }

  // function MyComponent() {
  //   return <div dangerouslySetInnerHTML={createMarkup()} />;
  // }

  const el = parse(element) as JSX.Element;
  el.props = {
    className: 'inline',
    onClick: onWordSelect
  }

  console.log(el);

  return (
    <div
      className={`text-${textSize}xl text-${sentimentColour}-400 max-w-max inline p-2`}
    ></div>
  );
};
