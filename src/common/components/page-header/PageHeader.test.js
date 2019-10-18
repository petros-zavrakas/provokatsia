import React from "react";
import { shallow, mount } from "enzyme";
import { findByAttribute } from "../../../common/utils/testUtils";
import PageHeader from "./PageHeader";

describe("PageHeader Component", () => {
  describe("shallow render", () => {
    let wrapper, select;
    beforeEach(() => {
      wrapper = shallow(<PageHeader header="test header" />);
      select = findByAttribute(wrapper);
    });

    it("Should render a header", () => {
      const element = select("header");
      expect(element.length).toBe(1);
    });
    it("Should render a description", () => {
      const element = select("description");
      expect(element.length).toBe(1);
    });
  });

  describe("Mount render", () => {
    const header = "Test Page";
    const description = "Test Description";

    let wrapper;
    beforeEach(() => {
      wrapper = mount(<PageHeader header={header}>{description}</PageHeader>);
    });

    it("Should get header from props", () => {
      const props = wrapper.props();
      expect(props.header).toEqual(header);
    });
    it("Should get description from props", () => {
      const props = wrapper.props();
      expect(props.children).toEqual(description);
    });
  });
});
