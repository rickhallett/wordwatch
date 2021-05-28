import { FifthPopularTopic } from "./topics/FifthPopularTopic";
import { FirstPopularTopic } from "./topics/FirstPopularTopic";
import { ForthPopularTopic } from "./topics/ForthPopularTopic";
import { SecondPopularTopic } from "./topics/SecondPopularTopic";
import { SixthPopularTopic } from "./topics/SixthPopularTopic";
import { ThirdPopularTopic } from "./topics/ThirdPopularTopic";

import { Topic } from "../types";

export const WordCloud = ({
  topics,
  onWordSelect,
}: {
  topics: Topic[];
  onWordSelect: any;
}): JSX.Element => {
  console.log("topics", topics);

  //TODO: sort only on app init
  topics.sort(() => Math.random() - 0.5);

  const onWordSelectEvent = (event: any, id: string) => {
    onWordSelect(event, id);
  };

  return (
    <section className="bg-gray-200 ml-6 mr-6 mb-6 p-6 md:w-2/3 h-xl">
      {topics.map((topic: Topic, index: number) => {
        if (topic.volume >= 50) {
          return (
            <FirstPopularTopic
              key={topic.id}
              topic={topic}
              onWordSelect={onWordSelectEvent}
            />
          );
        }
        if (topic.volume >= 40) {
          return (
            <SecondPopularTopic
              key={topic.id}
              topic={topic}
              onWordSelect={onWordSelectEvent}
            />
          );
        }
        if (topic.volume >= 30) {
          return (
            <ThirdPopularTopic
              key={topic.id}
              topic={topic}
              onWordSelect={onWordSelectEvent}
            />
          );
        }
        if (topic.volume >= 20) {
          return (
            <ForthPopularTopic
              key={topic.id}
              topic={topic}
              onWordSelect={onWordSelectEvent}
            />
          );
        }
        if (topic.volume >= 10) {
          return (
            <FifthPopularTopic
              key={topic.id}
              topic={topic}
              onWordSelect={onWordSelectEvent}
            />
          );
        }
        return (
          <SixthPopularTopic
            key={topic.id}
            topic={topic}
            onWordSelect={onWordSelectEvent}
          />
        );
      })}
    </section>
  );
};
