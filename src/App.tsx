import { useState } from "react";
import "./index.css";
import "./App.css";
import { Topic, WordCloudData } from "./types";
import { WordCloud } from "./components/WordCloud";
import { MetaCloud } from "./components/MetaCloud";
import { Header } from "./components/Header";
import { selectRandomTopic } from "./util/selectRandomTopic";
import rawData from "./topics.json";

const App = (): JSX.Element => {
  const data: WordCloudData = rawData;
  const [topicData] = useState<Topic[]>(data.topics);
  const [activeTopic, setActiveTopic] = useState<Topic>(
    selectRandomTopic(data.topics)
  );

  const handleWordClick = (event: any, id: string) => {
    try {
      const newActiveTopic = topicData.find((t) => t.id === id) as Topic;
      if (newActiveTopic) setActiveTopic(newActiveTopic);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <Header />
      <main className="flex flex-col md:flex-row">
        <WordCloud topics={topicData} onWordSelect={handleWordClick} />
        <MetaCloud activeTopic={activeTopic} />
      </main>
    </div>
  );
};

export default App;
