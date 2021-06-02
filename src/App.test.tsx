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
  /**
   * ERROR
   * When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
      // fire events that effect state
    });
    assert on the output

    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
        at App (/Users/kaishin/dev/react/wordwatch/src/App.tsx:17:37)

    SOLUTIONS
    - is this happening because the rendering of app itself causes state updates, which then trigger another render? If so, could I solve this by passing the initial data as props?
   */
  it("App does not crash", () => {
    render(<App />);
  });

  it("Renders with initial topic data", () => {
    const wrapper = render(<App />);
    const wordcloud = wrapper.getByTestId("wordcloud");
    expect(wordcloud.children.length).toBeGreaterThan(0);
  });

  describe("Header", () => {
    xit("Renders the header", () => {
      // TODO: why does act() not deal with the app state update on render?
      act(() => {
        render(<Header />);
      });

      const heading = screen.getByText("WordWatch");
      expect(heading).toHaveTextContent("WordWatch");
    });
  });

  describe("Layout", () => {
    /** Test Error
     * 
     * Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
        See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

        https://www.andrewsouthpaw.com/fix-invalid/


     */

    // TODO: look into snapshot testing to test layout

    xit("Collapses to flex-column after medium breakpoints are surpassed", () => {
      // act(() => {
      // render(App());
      // });
    });
  });

  describe("WordCloud", () => {
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
