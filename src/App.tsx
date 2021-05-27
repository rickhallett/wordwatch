import React from "react";
import "./index.css";
import "./App.css";
import logo from "./logo.svg";
import topics from "./topics.json";
import { FirstPopularTopic } from './components/FirstPopularTopic';
import {SecondPopularTopic} from './components/SecondPopularTopic';
import { FifthPopularTopic } from './components/FifthPopularTopic';
import { ForthPopularTopic } from './components/ForthPopularTopic';
import { SixthPopularTopic } from './components/SixthPopularTopic';
import { ThirdPopularTopic } from './components/ThirdPopularTopic';

function App() {
  console.log(topics);
  return (
    <div className="text-center">
      <header className="bg-gray-400 m-6 p-6 rounded shadow-lg">
        <img src={logo} className="App-logo mx-auto mb-3" alt="logo" />
        <h1 className="text-gray-100 text-3xl">WordWatch</h1>
      </header>
      <main className="flex flex-col md:flex-row">
        <section className="bg-gray-200 ml-6 mr-6 p-6 flex-grow md:w-2/3 h-96">
          <FirstPopularTopic sentiment={"positive"} />
          <SecondPopularTopic sentiment={"negative"} />
          <ThirdPopularTopic sentiment={"neutral"} />
          <ForthPopularTopic sentiment={"positive"} />
          <FifthPopularTopic sentiment={"negative"} />
          <SixthPopularTopic sentiment={"neutral"} />
        </section>
        <section className="bg-gray-300 ml-6 md:ml-0 mr-6 mt-6 md:mt-0 p-6 w-auto md:w-1/3 h-96">
          <div className="text-left text-gray-500 px-5 md:px-2 max-w-xs mx-auto md:max-w-full">
            <p className="flex flex-row justify-around">
              Information on topic <span>"books"</span>
            </p>
            <hr className="mt-3" />
            <p className="mt-4 flex flex-row justify-around">
              Total mentions: <span>15</span>
            </p>
            <hr className="mt-3" />
            <div className="mt-4">
              <p className="flex flex-row justify-around">
                Positive mentions: <span className="text-green-400">10</span>
              </p>
              <p className="flex flex-row justify-around">
                Neutral mentions: <span className="text-gray-400">5</span>
              </p>
              <p className="flex flex-row justify-around">
                Negative mentions: <span className="text-red-400">0</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
