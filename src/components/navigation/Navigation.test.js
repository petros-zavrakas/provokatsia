import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { componentRenders } from "../../common/utils/testUtils";
import Navigation from "./Navigation";

describe("Navigation Component", () => {
  const menuItems = [
    { label: "Events", path: "/events" },
    { label: "Team", path: "/team" }
  ];

  describe("Shallow testing", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Navigation menuItems={menuItems} />);
    });

    it("Should render without error", () => {
      componentRenders(wrapper, "NavigationComponent");
    });
  });

  describe("Mount testing", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter menuItems={menuItems}>
          <Navigation menuItems={menuItems} />
        </MemoryRouter>
      );
    });

    it("Should get menuItems array from props", () => {
      const props = wrapper.props();
      expect(menuItems).toEqual(props.menuItems);
    });
  });
});
