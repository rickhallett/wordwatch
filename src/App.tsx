import { useState, useEffect } from "react";

import "./index.css";
import "./App.css";

import { Topic } from "./types";

import { WordCloud } from "./components/WordCloud";
import { MetaCloud } from "./components/MetaCloud";
import { Header } from "./components/Header";
import { selectRandomTopic } from "./util/selectRandomTopic";

import raw from "./topics.json";

declare global {
  interface Window {
    React1: any;
    React2: any;
  }
}

// Check react-dom and react for instance conflict
window.React2 = require("react");
console.log(window.React1 === window.React2); // false.

const App = (): JSX.Element => {
  const [topicData, setTopicData] = useState<Topic[]>(raw.topics);
  const [activeTopic, setActiveTopic] = useState<Topic>({} as Topic);

  setActiveTopic(selectRandomTopic(raw.topics));

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
