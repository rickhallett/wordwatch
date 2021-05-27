export interface WordCloudData {
  topics: Topic[];
}

export interface Topic {
  id: string;
  label: string;
  volume: number;
  type: string;
  sentiment: Sentiment;
  sentimentScore: number;
  burst: number;
  days: Day[];
  pageType: PageType;
  queries: Query[];
}

export interface Day {
  date: string;
  volume: number;
}

export interface PageType {
  blog: number;
  facebook: number;
  forum: number;
  general: number;
  image: number;
  news: number;
  review: number;
  twitter: number;
  video: number;
}

export interface Query {
  id: number;
  name: string;
  volume: number;
}

export interface Sentiment {
  negative?: number;
  neutral?: number;
  positive?: number;
}
