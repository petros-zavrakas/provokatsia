import React from "react";
import { shallow } from "enzyme";
import { componentRenders } from "../../common/utils/testUtils";
import FetchError from "./FetchError";

describe("FetchError Component", () => {
  let wrapper;
  const errorMessage = "Error message";
  const nextAction = jest.fn();
  const label = "test label";
  beforeEach(() => {
    wrapper = shallow(
      <FetchError
        errorMessage={errorMessage}
        nextAction={nextAction}
        label={label}
      />
    );
  });

  it("Should render without errors", () => {
    componentRenders(wrapper, "fetchErrorComponent");
  });
  it("Should render a paragraph", () => {
    const p = wrapper.find("p");
    expect(p.length).toBe(1);
  });
  it("Should render a button", () => {
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
  });
});
