import React from "react";
import "./index.css";
import "./App.css";

import topics from "./topics.json";

import { WordCloud } from "./components/WordCloud";
import { MetaCloud } from "./components/MetaCloud";
import { Header } from './components/Header';

function App() {
  console.log(topics);
  return (
    <div className="text-center">
      <Header />
      <main className="flex flex-col md:flex-row">
        <WordCloud />
        <MetaCloud />
      </main>
    </div>
  );
}

export default App;
