import React from "react";
import "./index.css";
import "./App.css";
import logo from "./logo.svg";
import topics from "./topics.json";

function App() {
  console.log(topics);
  return (
    <div className="text-center">
      <header className="bg-gray-400 m-6 p-6 rounded shadow-lg">
        <img src={logo} className="App-logo mx-auto mb-3" alt="logo" />
        <h1 className="text-gray-100 text-3xl">WordWatch</h1>
      </header>
      <main className="flex">
        <section className="bg-gray-200 ml-6 p-6 w-2/3 h-96">
          <div className="text-6xl text-green-400">
            <h1>Most popular</h1>
          </div>
          <div className="text-5xl text-red-400">
            <h2>Second most popular</h2>
          </div>
          <div className="text-4xl text-gray-400">
            <h3>Third most popular</h3>
          </div>
          <div className="text-3xl text-green-400">
            <h4>Forth most popular</h4>
          </div>
          <div className="text-2xl text-red-400">
            <h5>Fifth most popular</h5>
          </div>
          <div className="text-1xl text-gray-400">
            <h6>Sixth most popular</h6>
          </div>
        </section>
        <section className="bg-gray-300 mr-6 p-6 w-1/3 h-96">
          <div>
            <p>
              Information on topic "<span>books</span>"
            </p>
            <p>
              Total mentions: <span>15</span>
            </p>
            <div>
              <p>
                Positive mentions: <span className="text-green-400">10</span>
              </p>
              <p>
                Neutral mentions: <span className="text-gray-400">5</span>
              </p>
              <p>
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
