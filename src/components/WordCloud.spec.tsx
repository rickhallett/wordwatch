import {
  screen,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { formatDiagnosticsWithColorAndContext } from "typescript";
import App from "../App";
import { Topic } from "../types";
import { popularityOf } from "../util/constants";
import { ApiInterface } from "../util/getTopicData";
import { WordCloud } from "./WordCloud";

const noop = () => {};

const checkRendersWithData = (
  renderedElements: HTMLElement[],
  topicData: any[]
): boolean => {
  return renderedElements.every((rendered) =>
    topicData.find((datum) => datum.label === rendered.innerHTML)
  );
};

describe("WordCloud", () => {
  afterEach(cleanup);

  it("Renders the WordCloud without crashing", () => {
    render(<WordCloud topics={[]} onWordSelect={noop} />);
  });

  it("If there are no topics, the user is meaningfully notified", () => {
    const wordCloud = render(<WordCloud topics={[]} onWordSelect={noop} />);

    const userNotificationPresent = Boolean(screen.getByText("No topics!"));
    expect(userNotificationPresent).toEqual(true);
  });

  it("Renders the correct number of topics", async () => {
    const data = await ApiInterface.getTopicData();
    const expectedLength = data.topics.length;

    const wordCloud = render(
      <WordCloud topics={data.topics} onWordSelect={noop} />
    );
    const topicsRendered = wordCloud.getAllByRole("heading");
    expect(topicsRendered.length).toEqual(expectedLength);
  });

  it("Renders topics in a shuffed order on each topic click", () => {
    const app = render(<App />);
    const firstTopicsRendered = app.getAllByTestId("topic-element");

    fireEvent.click(firstTopicsRendered[0]);

    const secondTopicsRendered = app.getAllByTestId("topic-element");

    const checkShuffled = (): boolean => {
      return firstTopicsRendered.some(
        (topic, index) =>
          topic.innerHTML !== secondTopicsRendered[index].innerHTML
      );
    };

    expect(checkShuffled()).toBe(true);
  });

  /**
   * Tests ensuring screen reader accessibility
   */
  it("Renders most popular topics largest", async () => {
    const data = await ApiInterface.getTopicData();
    const firstMostPopularTopicData = data.topics.filter((t) =>
      popularityOf(t).isFirst()
    );

    const app = render(<App />);
    const firstTopicsRendered = app.getAllByTestId("topic-element");

    // TODO: find a way to do this declaritively with react-testing-library
    const firstMostPopularTopicsRendered = firstTopicsRendered.filter(
      (el) => el.outerHTML.substring(0, 3) === "<h1"
    );

    expect(
      checkRendersWithData(
        firstMostPopularTopicsRendered,
        firstMostPopularTopicData
      )
    ).toBe(true);
  });

  it("Renders second most popular topics second largest", async () => {
    const data = await ApiInterface.getTopicData();
    const secondMostPopularTopicData = data.topics.filter((t) =>
      popularityOf(t).isSecond()
    );

    const app = render(<App />);
    const secondTopicsRendered = app.getAllByTestId("topic-element");

    // TODO: find a way to do this declaritively with react-testing-library
    const secondMostPopularTopicsRendered = secondTopicsRendered.filter(
      (el) => el.outerHTML.substring(0, 3) === "<h2"
    );

    expect(
      checkRendersWithData(
        secondMostPopularTopicsRendered,
        secondMostPopularTopicData
      )
    ).toBe(true);
  });

  xit("Renders third most popular topics third largest", () => {});

  xit("Renders forth most popular topics forth largest", () => {});

  xit("Renders fifth most popular topics fifth largest", () => {});

  xit("Renders sixth most popular topics sixth largest", () => {});

  xit("Renders topics with a positive sentiment in green font", () => {});

  xit("Renders topics with a neutral sentiment in gray font", () => {});

  xit("Renders topics with a negative sentiment in red font", () => {});
});
