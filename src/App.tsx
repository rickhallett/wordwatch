import React, { useState, useEffect } from "react";

import "./index.css";
import "./App.css";

import { Topic } from "./types";

import { WordCloud } from "./components/WordCloud";
import { MetaCloud } from "./components/MetaCloud";
import { Header } from "./components/Header";
import { ApiInterface } from "./util/getTopicData";

const App = (): JSX.Element => {
  const [topicData, setTopicData] = useState<Topic[]>([] as Topic[]);
  const [activeTopic, setActiveTopic] = useState<Topic>({} as Topic);

  useEffect(() => {
    const asyncFetch = async () => {
      const data = await ApiInterface.getTopicData().topics;
      setTopicData(data);
      setActiveTopic(selectRandomTopic());
    };

    asyncFetch();
  }, []);

  const selectRandomTopic = (): Topic => {
    const topic = topicData.find(
      (t, i) => i === Math.round(Math.random() * (topicData.length - 1))
    );
    console.log(topic, topicData[0]);
    return topic ? topic : topicData[0];
  };

  // TODO: what is the React ts type for a mouse click event? React.MouseEvent does not define event.target.innerText)
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
