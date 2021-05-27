import React from 'react';
import { FifthPopularTopic } from './topics/FifthPopularTopic';
import { FirstPopularTopic } from './topics/FirstPopularTopic';
import { ForthPopularTopic } from './topics/ForthPopularTopic';
import { SecondPopularTopic } from './topics/SecondPopularTopic';
import { SixthPopularTopic } from './topics/SixthPopularTopic';
import { ThirdPopularTopic } from './topics/ThirdPopularTopic';

export const WordCloud = (): JSX.Element => {
  return (
    <section className="bg-gray-200 ml-6 mr-6 p-6 flex-grow md:w-2/3 h-96">
      <FirstPopularTopic sentiment={"positive"} />
      <SecondPopularTopic sentiment={"negative"} />
      <ThirdPopularTopic sentiment={"neutral"} />
      <ForthPopularTopic sentiment={"positive"} />
      <FifthPopularTopic sentiment={"negative"} />
      <SixthPopularTopic sentiment={"neutral"} />
    </section>
  );
}