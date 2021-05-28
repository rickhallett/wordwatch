import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Does not throw on multiple page loads (stress test the data)", () => {
    fail();
    
  });

  describe("Header", () => {
    it("Renders the header", () => {
      fail();
    });
  });

  describe("Layout", () => {
    it("Collapses to flex-column after medium breakpoints are surpassed", () => {
      fail();
    });
  });

  describe("WordCloud", () => {
    it("If there are no topics, the render does not throw", () => {
      fail();
    });

    it("If there are no topics, the user is meaningfully notified", () => {
      fail();
    });

    it("Renders the correct number of topics", () => {
      fail();
    });

    it("Renders topics in a shuffed order on each topic click", () => {
      fail();
    });

    it("Renders most popular topics largest", () => {
      fail();
    });

    it("Renders second most popular topics second largest", () => {
      fail();
    });

    it("Renders third most popular topics third largest", () => {
      fail();
    });

    it("Renders forth most popular topics forth largest", () => {
      fail();
    });

    it("Renders fifth most popular topics fifth largest", () => {
      fail();
    });

    it("Renders sixth most popular topics sixth largest", () => {
      fail();
    });

    it("Renders topics with a positive sentiment in green font", () => {
      fail();
    });

    it("Renders topics with a neutral sentiment in gray font", () => {
      fail();
    });

    it("Renders topics with a negative sentiment in red font", () => {
      fail();
    });
  });

  describe("MetaCloud", () => {
    it("If there is no topic selected, the component does not throw", () => {
      fail();
    });

    it("If there is no topic selected, the user is meaningfully notified", () => {
      fail();
    });

    it("If there are there are no positive mentions, the total is rendered as 0", () => {
      fail();
    });
  });
});
