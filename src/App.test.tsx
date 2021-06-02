import {
  fireEvent,
  render,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import App from "./App";
import { Header } from "./components/Header";

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
});
