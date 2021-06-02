import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import { Header } from "./components/Header";

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
});
