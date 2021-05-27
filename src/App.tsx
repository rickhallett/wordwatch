import React from "react";
import "./index.css";
import "./App.css";
import logo from "./logo.svg";
import topics from "./topics.json";

import { WordCloud } from "./components/WordCloud";
import { MetaCloud } from "./components/MetaCloud";

function App() {
  console.log(topics);
  return (
    <div className="text-center">
      <header className="bg-gray-400 m-6 p-6 rounded shadow-lg">
        <img src={logo} className="App-logo mx-auto mb-3" alt="logo" />
        <h1 className="text-gray-100 text-3xl">WordWatch</h1>
      </header>
      <main className="flex flex-col md:flex-row">
        <WordCloud />
        <MetaCloud />
      </main>
    </div>
  );
}

export default App;
