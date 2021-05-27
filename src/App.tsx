import "./index.css";
import "./App.css";

import rawData from "./topics.json";
import {WordCloudData} from './types';

import { WordCloud } from "./components/WordCloud";
import { MetaCloud } from "./components/MetaCloud";
import { Header } from "./components/Header";

function App() {
  const data: WordCloudData = rawData;
  return (
    <div className="text-center">
      <Header />
      <main className="flex flex-col md:flex-row">
        <WordCloud topics={data.topics} />
        <MetaCloud />
      </main>
    </div>
  );
}

export default App;
