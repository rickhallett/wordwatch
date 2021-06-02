import {
  render,
  screen,
  cleanup,
  fireEvent,
  act,
} from "@testing-library/react";
import App from "./App";
import { Header } from "./components/Header";
import { MetaCloud } from "./components/MetaCloud";
import { WordCloud } from "./components/WordCloud";
import { ApiInterface } from "./util/getTopicData";

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

  it("If a topic is selected, this topic appears in the metacloud", () => {
    const app = render(<App />);

    const firstTopicsRendered = app.getAllByTestId("topic-element");

    fireEvent.click(firstTopicsRendered[0]);

    const activeTopicAfterClick = app.getByTestId("activetopic-label");

    expect(activeTopicAfterClick.innerHTML).toEqual(
      firstTopicsRendered[0].innerHTML
    );
  });
});
