import { HeadingTags, Topic } from "../types";

const carrotRight = ">";

export const getWordHeadingTags = (topic: Topic): HeadingTags => {
  if (topic.volume >= 50) {
    return {
      openingTag: "<h1 ",
      closeOpeningTag: carrotRight,
      closingTag: "</h1>",
    };
  }
  if (topic.volume >= 40) {
    return {
      openingTag: "<h2 ",
      closeOpeningTag: carrotRight,
      closingTag: "</h2>",
    };
  }
  if (topic.volume >= 30) {
    return {
      openingTag: "<h3 ",
      closeOpeningTag: carrotRight,
      closingTag: "</h3>",
    };
  }
  if (topic.volume >= 20) {
    return {
      openingTag: "<h4 ",
      closeOpeningTag: carrotRight,
      closingTag: "</h4>",
    };
  }
  if (topic.volume >= 10) {
    return {
      openingTag: "<h5 ",
      closeOpeningTag: carrotRight,
      closingTag: "</h5 ",
    };
  }
  return {
    openingTag: "<h6 ",
    closeOpeningTag: carrotRight,
    closingTag: "</h6>",
  };
};
