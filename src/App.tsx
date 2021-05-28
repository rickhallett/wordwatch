import React, { useState } from "react";

import "./index.css";
import "./App.css";

import rawData from "./topics.json";
import { WordCloudData, Topic } from "./types";

import { WordCloud } from "./components/WordCloud";
import { MetaCloud } from "./components/MetaCloud";
import { Header } from "./components/Header";

const App = (): JSX.Element => {
  const data: WordCloudData = rawData;


  const selectRandomTopic = (): Topic => {
    const topic = data.topics.find(
      (t, i) => i === Math.round(Math.random() * (data.topics.length - 1))
    );
    return topic ? topic : data.topics[0];
  };

  const [activeTopic, setActiveTopic] = useState(selectRandomTopic());

  // TODO: what is the React ts type for a mouse click event? React.MouseEvent does not define event.target.innerText)
  const handleWordClick = (event: any, id: string) => {
    try {
      const newActiveTopic = data.topics.find((t) => t.id === id) as Topic;
      if (newActiveTopic) setActiveTopic(newActiveTopic);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <Header />
      <main className="flex flex-col md:flex-row">
        <WordCloud topics={[]} onWordSelect={handleWordClick} />
        <MetaCloud activeTopic={activeTopic} />
      </main>
    </div>
  );
};

export default App;
