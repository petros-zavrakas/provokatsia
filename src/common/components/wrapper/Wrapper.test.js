import React from "react";
import { shallow } from "enzyme";
import { findByAttribute, componentRenders } from "../../utils/testUtils";
import Wrapper from "./Wrapper";

describe("Wrapper Component", () => {
  const children = "test children";
  let wrapper, select;
  beforeEach(() => {
    wrapper = shallow(<Wrapper>{children}</Wrapper>);
    select = findByAttribute(wrapper);
  });

  it("Should render without errots", () => {
    componentRenders(wrapper, "wrapperComponent");
  });

  it("Should render children", () => {
    const props = wrapper.props();
    expect(props.children).toEqual(children);
  });
});
