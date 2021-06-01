import { WordCloudData } from '../types';
import rawData from "../topics.json";

export const ApiInterface = {
  getTopicData: async (): Promise<WordCloudData> => {
    return await rawData;
  }
}