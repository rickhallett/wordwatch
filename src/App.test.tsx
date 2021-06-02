import {
  fireEvent,
  render,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import App from "./App";
import { Header } from "./components/Header";
import { Topic } from "./types";
import { WordCloud } from "./components/WordCloud";
import { FirstPopularTopic } from "./components/topics/FirstPopularTopic";
import { ApiInterface } from "./util/getTopicData";
import { SecondPopularTopic } from "./components/topics/SecondPopularTopic";
import { ThirdPopularTopic } from "./components/topics/ThirdPopularTopic";
import { ForthPopularTopic } from "./components/topics/ForthPopularTopic";
import { FifthPopularTopic } from "./components/topics/FifthPopularTopic";
import { SixthPopularTopic } from "./components/topics/SixthPopularTopic";

/**
 * rennder w/o crash ok
 * explicit clean up    afterEach(rtl.cleanup)
 * dumb components; are they easy to test? Does the button/label register a click? It doesnt care what the click does; strike with mocked function
 * the more complex out testing fns, the more likely we will have bugs in them; easy tests come from code that is more reusable
 * if you find yourself checking something more than once, that should probably be cemented in a test
 */

const noop = () => {};

// TODO: DRY up topic element set up
// const setUpTopicElementAndClick = async (element: JSX.Element): void => {
//   const data = await ApiInterface.getTopicData();
//   const clicked = jest.fn();
//   const topicElement = render(
//     <ForthPopularTopic topic={data.topics[0]} onWordSelect={clicked} />
//   );
//   const topicHeading = topicElement.getByRole("heading");
//   fireEvent.click(topicHeading);
//   expect(clicked).toHaveBeenCalled();
// }

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

  describe("MetaCloud", () => {
    xit("If there is no topic selected, the component does not throw", () => {});

    xit("If there is no topic selected, the user is meaningfully notified", () => {});

    xit("If a topic is selected, this topic appears in the metacloud", () => {});

    xit("If there are there are no positive mentions, the total is rendered as 0", () => {});
  });

  describe("FirstPopularTopic", () => {
    it("Renders without crashing", () => {
      render(<FirstPopularTopic topic={{} as Topic} onWordSelect={noop} />);
    });

    it("Renders the topic label text", async () => {
      const data = await ApiInterface.getTopicData();
      const topic = data.topics[0];
      const topicElement = render(
        <FirstPopularTopic topic={topic} onWordSelect={noop} />
      );
      const topicHeading = topicElement.getByText(topic.label);
      expect(topicHeading.innerHTML).toEqual(topic.label);
    });

    it("Handles a click event via props", async () => {
      const data = await ApiInterface.getTopicData();
      const clicked = jest.fn();
      const topicElement = render(
        <FirstPopularTopic topic={data.topics[0]} onWordSelect={clicked} />
      );
      const topicHeading = topicElement.getByRole("heading");
      fireEvent.click(topicHeading);
      expect(clicked).toHaveBeenCalled();
    });
  });

  describe("SecondPopularTopic", () => {
    it("Renders without crashing", () => {
      render(<SecondPopularTopic topic={{} as Topic} onWordSelect={noop} />);
    });

    it("Renders the topic label text", async () => {
      const data = await ApiInterface.getTopicData();
      const topic = data.topics[0];
      const topicElement = render(
        <SecondPopularTopic topic={topic} onWordSelect={noop} />
      );
      const topicHeading = topicElement.getByText(topic.label);
      expect(topicHeading.innerHTML).toEqual(topic.label);
    });

    it("Handles a click event via props", async () => {
      const data = await ApiInterface.getTopicData();
      const clicked = jest.fn();
      const topicElement = render(
        <SecondPopularTopic topic={data.topics[0]} onWordSelect={clicked} />
      );
      const topicHeading = topicElement.getByRole("heading");
      fireEvent.click(topicHeading);
      expect(clicked).toHaveBeenCalled();
    });
  });

  describe("ThirdPopularTopic", () => {
    it("Renders without crashing", () => {
      render(<ThirdPopularTopic topic={{} as Topic} onWordSelect={noop} />);
    });

    it("Renders the topic label text", async () => {
      const data = await ApiInterface.getTopicData();
      const topic = data.topics[0];
      const topicElement = render(
        <ThirdPopularTopic topic={topic} onWordSelect={noop} />
      );
      const topicHeading = topicElement.getByText(topic.label);
      expect(topicHeading.innerHTML).toEqual(topic.label);
    });

    it("Handles a click event via props", async () => {
      const data = await ApiInterface.getTopicData();
      const clicked = jest.fn();
      const topicElement = render(
        <ThirdPopularTopic topic={data.topics[0]} onWordSelect={clicked} />
      );
      const topicHeading = topicElement.getByRole("heading");
      fireEvent.click(topicHeading);
      expect(clicked).toHaveBeenCalled();
    });
  });

  describe("ForthPopularTopic", () => {
    it("Renders without crashing", () => {
      render(<ForthPopularTopic topic={{} as Topic} onWordSelect={noop} />);
    });

    it("Renders the topic label text", async () => {
      const data = await ApiInterface.getTopicData();
      const topic = data.topics[0];
      const topicElement = render(
        <ForthPopularTopic topic={topic} onWordSelect={noop} />
      );
      const topicHeading = topicElement.getByText(topic.label);
      expect(topicHeading.innerHTML).toEqual(topic.label);
    });

    it("Handles a click event via props", async () => {
      const data = await ApiInterface.getTopicData();
      const clicked = jest.fn();
      const topicElement = render(
        <ForthPopularTopic topic={data.topics[0]} onWordSelect={clicked} />
      );
      const topicHeading = topicElement.getByRole("heading");
      fireEvent.click(topicHeading);
      expect(clicked).toHaveBeenCalled();
    });
  });

  describe("FifthPopularTopic", () => {
    it("Renders without crashing", () => {
      render(<FifthPopularTopic topic={{} as Topic} onWordSelect={noop} />);
    });

    it("Renders the topic label text", async () => {
      const data = await ApiInterface.getTopicData();
      const topic = data.topics[0];
      const topicElement = render(
        <FifthPopularTopic topic={topic} onWordSelect={noop} />
      );
      const topicHeading = topicElement.getByText(topic.label);
      expect(topicHeading.innerHTML).toEqual(topic.label);
    });

    it("Handles a click event via props", async () => {
      const data = await ApiInterface.getTopicData();
      const clicked = jest.fn();
      const topicElement = render(
        <FifthPopularTopic topic={data.topics[0]} onWordSelect={clicked} />
      );
      const topicHeading = topicElement.getByRole("heading");
      fireEvent.click(topicHeading);
      expect(clicked).toHaveBeenCalled();
    });
  });

  describe("SixthPopularTopic", () => {
    it("Renders without crashing", () => {
      render(<SixthPopularTopic topic={{} as Topic} onWordSelect={noop} />);
    });

    it("Renders the topic label text", async () => {
      const data = await ApiInterface.getTopicData();
      const topic = data.topics[0];
      const topicElement = render(
        <SixthPopularTopic topic={topic} onWordSelect={noop} />
      );
      const topicHeading = topicElement.getByText(topic.label);
      expect(topicHeading.innerHTML).toEqual(topic.label);
    });

    it("Handles a click event via props", async () => {
      const data = await ApiInterface.getTopicData();
      const clicked = jest.fn();
      const topicElement = render(
        <SixthPopularTopic topic={data.topics[0]} onWordSelect={clicked} />
      );
      const topicHeading = topicElement.getByRole("heading");
      fireEvent.click(topicHeading);
      expect(clicked).toHaveBeenCalled();
    });
  });
});
