import { Topic } from '../types';

export const getTextSize = (topic: Topic): number => {
  if (topic.volume >= 50) {
    return 6;
  }
  if (topic.volume >= 40) {
    return 5;
  }
  if (topic.volume >= 30) {
    return 4;
  }
  if (topic.volume >= 20) {
    return 3;
  }
  if (topic.volume >= 10) {
    return 2;
  }
  return 1;
}