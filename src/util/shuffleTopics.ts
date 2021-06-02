import { Topic } from "../types";

export const shuffleTopics = (topics: Topic[]) => {
  topics.sort(() => Math.random() - 0.5);
};
