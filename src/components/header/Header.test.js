import React from "react";
import { shallow } from "enzyme";
import {
  findByAttribute,
  componentRenders
} from "../../common/utils/testUtils";
import Header from "./Header";

describe("Header Component", () => {
  let wrapper, select;
  beforeEach(() => {
    wrapper = shallow(<Header />);
    select = findByAttribute(wrapper);
  });

  it("Should render without error", () => {
    componentRenders(wrapper, "headerComponent");
  });

  it("Should render logo and menu", () => {
    const logo = select("logo");
    const menu = select("main-menu");
    expect(logo.length).toBe(1);
    expect(menu.length).toBe(1);
  });
});
