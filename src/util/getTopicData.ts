import { WordCloudData } from '../types';
import rawData from "../topics.json";

export const ApiInterface = {
  getTopicData: (): WordCloudData => {
    return rawData;
  }
}