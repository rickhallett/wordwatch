import React from "react";

export const MetaCloud = (): JSX.Element => {
  return (
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
  );
};