import { FifthPopularTopic } from "./topics/FifthPopularTopic";
import { FirstPopularTopic } from "./topics/FirstPopularTopic";
import { ForthPopularTopic } from "./topics/ForthPopularTopic";
import { SecondPopularTopic } from "./topics/SecondPopularTopic";
import { SixthPopularTopic } from "./topics/SixthPopularTopic";
import { ThirdPopularTopic } from "./topics/ThirdPopularTopic";

import { WordCloudData, Topic } from "../types";

export const WordCloud = ({ topics }: WordCloudData): JSX.Element => {
  console.log("topics", topics);
  topics.sort(() => Math.random() - 0.5);
  return (
    <section className="bg-gray-200 ml-6 mr-6 p-6 flex-grow md:w-2/3 h-96">
      {topics.map((topic: Topic, index: number) => {
        if (topic.volume >= 50) {
          return <FirstPopularTopic key={topic.id} topic={topic} />;
        }
        if (topic.volume >= 40) {
          return <SecondPopularTopic key={topic.id} topic={topic} />;
        }
        if (topic.volume >= 30) {
          return <ThirdPopularTopic key={topic.id} topic={topic} />;
        }
        if (topic.volume >= 20) {
          return <ForthPopularTopic key={topic.id} topic={topic} />;
        }
        if (topic.volume >= 10) {
          return <FifthPopularTopic key={topic.id} topic={topic} />;
        }
        if (topic.volume >= 0) {
          return <SixthPopularTopic key={topic.id} topic={topic} />;
        }
      })}
    </section>
  );
};
