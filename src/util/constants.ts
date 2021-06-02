import { Topic } from "../types";

export const popularityOf = (topic: Topic): any => {
  return {
    isFirst: () => topic.volume >= 50,
    isSecond: () => topic.volume >= 40,
    isThird: () => topic.volume >= 30,
    isForth: () => topic.volume >= 20,
    isFifth: () => topic.volume >= 10,
  };
};
