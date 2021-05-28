import { FifthPopularTopic } from "./topics/FifthPopularTopic";
import { FirstPopularTopic } from "./topics/FirstPopularTopic";
import { ForthPopularTopic } from "./topics/ForthPopularTopic";
import { SecondPopularTopic } from "./topics/SecondPopularTopic";
import { SixthPopularTopic } from "./topics/SixthPopularTopic";
import { ThirdPopularTopic } from "./topics/ThirdPopularTopic";

import { WordCloudData, Topic } from "../types";

export const WordCloud = ({ topics }: WordCloudData): JSX.Element => {
  console.log("topics", topics);
  console.log(
    "volumes",
    topics.map((t) => t.volume)
  );
  const sentiments = topics.map((t) => t.sentimentScore);
  console.log("sentiments", sentiments);
  console.log(
    "max sentiment",
    Math.max(...topics.map((t) => t.sentimentScore))
  );
  console.log(
    "max sentiment",
    Math.min(...topics.map((t) => t.sentimentScore))
  );
  console.log(
    "avg sentiment",
    sentiments.reduce((a, b) => a + b) / topics.length
  );
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
