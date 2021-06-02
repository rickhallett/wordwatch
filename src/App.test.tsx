import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  cleanup,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import { Header } from "./components/Header";
import { Topic } from "./types";
import { WordCloud } from "./components/WordCloud";
import { ApiInterface } from "./util/getTopicData";

/**
 * rennder w/o crash ok
 * explicit clean up    afterEach(rtl.cleanup)
 * dumb components; are they easy to test? Does the button/label register a click? It doesnt care what the click does; strike with mocked function
 * the more complex out testing fns, the more likely we will have bugs in them; easy tests come from code that is more reusable
 * if you find yourself checking something more than once, that should probably be cemented in a test
 */

const noop = () => {};

describe("App", () => {
  afterEach(cleanup);

  it("App does not crash", () => {
    render(<App />);
  });

  it("Renders the header", () => {
    render(<Header />);

    const heading = screen.getByText("WordWatch");
    expect(heading).toHaveTextContent("WordWatch");
  });

  it("Renders with initial topic data", () => {
    const wrapper = render(<App />);
    const wordcloud = wrapper.getByTestId("wordcloud");
    expect(wordcloud.children.length).toBeGreaterThan(0);
  });

  it("Renders with an initially selected topic", () => {
    const wrapper = render(<App />);
    const metacloud = wrapper.getByTestId("metacloud");
  });

  describe("Layout", () => {
    // TODO: look into snapshot testing and/or responsiveness testing to test layout
    xit("Collapses to flex-column after medium breakpoints are surpassed", () => {});
  });

  describe("WordCloud", () => {
    it("Renders the WordCloud without crashing", () => {
      render(<WordCloud topics={[]} onWordSelect={noop} />);
    });

    xit("If there are no topics, the user is meaningfully notified", () => {
      const wordCloud = render(<WordCloud topics={[]} onWordSelect={noop} />);

      const userNotificationPresent = Boolean(screen.getByText("No topics!"));
      expect(userNotificationPresent).toEqual(true);
    });

    xit("Renders the correct number of topics", async () => {
      const data = await ApiInterface.getTopicData();
      const expectedLength = data.topics.length;

      const wordCloud = render(
        <WordCloud topics={data.topics} onWordSelect={noop} />
      );
      const topicsRendered = wordCloud.getAllByRole("heading");

      expect(topicsRendered.length).toEqual(expectedLength);
    });

    // BUG: despite click event, matcher returns equality. There is some issue here with the asynchonous stack
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

  describe("MetaCloud", () => {
    xit("If there is no topic selected, the component does not throw", () => {});

    xit("If there is no topic selected, the user is meaningfully notified", () => {});

    xit("If a topic is selected, this topic appears in the metacloud", () => {});

    xit("If there are there are no positive mentions, the total is rendered as 0", () => {});
  });
});
