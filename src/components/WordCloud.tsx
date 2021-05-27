import { FifthPopularTopic } from "./topics/FifthPopularTopic";
import { FirstPopularTopic } from "./topics/FirstPopularTopic";
import { ForthPopularTopic } from "./topics/ForthPopularTopic";
import { SecondPopularTopic } from "./topics/SecondPopularTopic";
import { SixthPopularTopic } from "./topics/SixthPopularTopic";
import { ThirdPopularTopic } from "./topics/ThirdPopularTopic";

import { WordCloudData, Topic } from "../types";

export const WordCloud = ({ topics }: WordCloudData): JSX.Element => {
  console.log(topics);
  console.log(topics.map((t) => t.volume));
  // switch (key) {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }
  return (
    <section className="bg-gray-200 ml-6 mr-6 p-6 flex-grow md:w-2/3 h-96">
      {topics.map((topic: Topic, index: number) => {
        if (topic.volume >= 50) {
          return <FirstPopularTopic sentiment={topic.sentimentScore} />;
        }
        if (topic.volume >= 40) {
          return <SecondPopularTopic sentiment={topic.sentimentScore} />;
        }
        if (topic.volume >= 30) {
          return <ThirdPopularTopic sentiment={topic.sentimentScore} />;
        }
        if (topic.volume >= 20) {
          return <ForthPopularTopic sentiment={topic.sentimentScore} />;
        }
        if (topic.volume >= 10) {
          return <FifthPopularTopic sentiment={topic.sentimentScore} />;
        }
        if (topic.volume >= 0) {
          return <SixthPopularTopic sentiment={topic.sentimentScore} />;
        }
      })}
    </section>
  );
};
