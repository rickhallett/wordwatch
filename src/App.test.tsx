import { render, screen } from "@testing-library/react";
import App from "./App";
import { Header } from "./components/Header";
import { act } from "react-dom/test-utils";

describe("App", () => {
  xit("Does not throw on multiple page loads (stress test the data)", () => {});

  describe("Header", () => {
    it("Renders the header", () => {
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

    xit("Collapses to flex-column after medium breakpoints are surpassed", () => {
      // act(() => {
        // render(App());
      // });
    });
  });

  describe("WordCloud", () => {
    xit("If there are no topics, the render does not throw", () => {});

    xit("If there are no topics, the user is meaningfully notified", () => {});

    xit("Renders the correct number of topics", () => {});

    xit("Renders topics in a shuffed order on each topic click", () => {});

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

    xit("If there are there are no positive mentions, the total is rendered as 0", () => {});
  });
});
