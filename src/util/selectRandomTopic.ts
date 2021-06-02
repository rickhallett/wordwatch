import { Topic } from "../types";

export const selectRandomTopic = (topicData: Topic[]): Topic => {
  const topic = topicData.find(
    (t, i) => i === Math.round(Math.random() * (topicData.length - 1))
  );
  return topic ? topic : topicData[0];
};
