import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import App from "../App";
import { Topic } from "../types";
import { ApiInterface } from "../util/getTopicData";
import { WordCloud } from "./WordCloud";

const noop = () => {};

describe("WordCloud", () => {
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

    expect(firstTopicsRendered[0].innerHTML).not.toEqual(
      secondTopicsRendered[0].innerHTML
    );
  });

  xit("Renders most popular topics largest", () => {});

  xit("Renders second most popular topics second largest", () => {});

  xit("Renders third most popular topics third largest", () => {});

  xit("Renders forth most popular topics forth largest", () => {});

  xit("Renders fifth most popular topics fifth largest", () => {});

  xit("Renders sixth most popular topics sixth largest", () => {});

  xit("Renders topics with a positive sentiment in green font", () => {});

  xit("Renders topics with a neutral sentiment in gray font", () => {});

  xit("Renders topics with a negative sentiment in red font", () => {});
});
