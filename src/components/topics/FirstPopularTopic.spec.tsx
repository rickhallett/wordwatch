import { fireEvent, render } from "@testing-library/react";
import { Topic } from "../../types";
import { ApiInterface } from "../../util/getTopicData";
import { FirstPopularTopic } from "./FirstPopularTopic";

const noop = () => {};

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
