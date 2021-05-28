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

  console.log("activeWord", activeTopic);
  const handleWordClick = (event: any) => {};

  return (
    <div className="text-center">
      <Header />
      <main className="flex flex-col md:flex-row">
        <WordCloud topics={data.topics} />
        <MetaCloud />
      </main>
    </div>
  );
};

export default App;
