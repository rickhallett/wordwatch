import { FifthPopularTopic } from "./topics/FifthPopularTopic";
import { FirstPopularTopic } from "./topics/FirstPopularTopic";
import { ForthPopularTopic } from "./topics/ForthPopularTopic";
import { SecondPopularTopic } from "./topics/SecondPopularTopic";
import { SixthPopularTopic } from "./topics/SixthPopularTopic";
import { ThirdPopularTopic } from "./topics/ThirdPopularTopic";

import { Topic } from "../types";
import { TopicElement } from "./topics/TopicElement";

export const WordCloud = ({
  topics,
  onWordSelect,
}: {
  topics: Topic[];
  onWordSelect: any;
}): JSX.Element => {
  console.log("topics", topics);
  topics.sort(() => Math.random() - 0.5);

  const onWordSelectEvent = (event: any) => {
    console.log("wordcloud", event.target.value);
    onWordSelect(event);
  };

  return (
    <section className="bg-gray-200 ml-6 mr-6 mb-6 p-6 md:w-2/3 h-xl">
      {topics.map((topic: Topic, index: number) => (
        <TopicElement topic={topic} onWordSelect={onWordSelectEvent} />
      ))}
    </section>
  );
};
