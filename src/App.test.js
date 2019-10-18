import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    const component = wrapper.find(".App");
    expect(component.length).toBe(1);
  });
});
