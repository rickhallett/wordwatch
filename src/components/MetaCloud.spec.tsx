import { fireEvent, render } from "@testing-library/react";
import { Topic } from "../types";
import { ApiInterface } from "../util/getTopicData";
import { MetaCloud } from "./MetaCloud";

const noop = () => {};

describe("MetaCloud", () => {
  it("Renders without crashing", () => {
    render(<MetaCloud activeTopic={{} as Topic} />);
  });

  it("If there is no topic selected, the component does not throw", async () => {
    const data = await ApiInterface.getTopicData();
    const topic = data.topics[0];
    render(<MetaCloud activeTopic={topic} />);
  });

  it("If there is no topic selected, the user is meaningfully notified", () => {
    const metacloud = render(<MetaCloud activeTopic={{} as Topic} />);
    const notification = metacloud.getByText("No topic selected!");
    expect(notification.innerHTML).toEqual("No topic selected!");
  });

  xit("If there are there are no positive mentions, the total is rendered as 0", () => {});
});
