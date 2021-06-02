import { screen, fireEvent, render, waitFor } from "@testing-library/react";
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

  // BUG: despite click event, matcher returns equality. There is some issue here with the asynchonous stack
  // NB: this might be due to the state changing in a parent component; what happens if we raise this test to app level? Does render output a static RenderResult, or one that changes on change of props?
  // Wordcloud should be a dumb component; it should have no knowledge of where the topics come from
  xit("Renders topics in a shuffed order on each topic click", async () => {
    const data = await ApiInterface.getTopicData();
    const wordCloud = render(
      <WordCloud topics={data.topics} onWordSelect={noop} />
    );

    const firstTopicRendered = wordCloud.getAllByRole("heading")[0];
    console.log("firstTopicRendered", firstTopicRendered);

    const clicked = await fireEvent.click(firstTopicRendered);
    console.log("clicked", clicked);

    await waitFor(() => {
      expect(firstTopicRendered.innerHTML).not.toEqual(
        wordCloud.getAllByRole("heading")[0]
      );
    });

    const secondTopicsRendered = await wordCloud.findAllByRole("heading");
    const secondTopicRendered = secondTopicsRendered[0];

    expect(firstTopicRendered.innerHTML).not.toEqual(
      secondTopicRendered.innerHTML
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
