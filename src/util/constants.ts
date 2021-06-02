import { Topic } from "../types";

export const popularityOf = (topic: Topic): any => {
  return {
    isFirst: () => topic.volume >= 50,
    isSecond: () => topic.volume >= 40 && topic.volume < 50,
    isThird: () => topic.volume >= 30 && topic.volume < 40,
    isForth: () => topic.volume >= 20 && topic.volume < 30,
    isFifth: () => topic.volume >= 10 && topic.volume < 20,
    isSixth: () => topic.volume >= 0 && topic.volume < 10,
  };
};
