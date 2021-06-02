import { fireEvent, render } from "@testing-library/react";
import { Topic } from "../types";
import { ApiInterface } from "../util/getTopicData";
import { MetaCloud } from "./MetaCloud";

const noop = () => {};

describe("MetaCloud", () => {
  it("Renders without crashing", () => {
    render(<MetaCloud activeTopic={{} as Topic} />);
  });

  xit("If there is no topic selected, the component does not throw", async () => {
    const data = await ApiInterface.getTopicData();
    const topic = data.topics[0];
    render(<MetaCloud activeTopic={topic} />);
  });

  xit("If there is no topic selected, the user is meaningfully notified", () => {});

  xit("If a topic is selected, this topic appears in the metacloud", () => {});

  xit("If there are there are no positive mentions, the total is rendered as 0", () => {});
});
