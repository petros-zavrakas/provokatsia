import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import {
  componentRenders,
  findByAttribute
} from "../../common/utils/testUtils";
import { Team } from "./Team";

describe("Team Component", () => {
  const mockStore = configureStore();
  const mockFetchMembers = jest.fn();
  const mockState = {
    teamMembers: [
      { id: 1, name: "Test members name 1" },
      { id: 2, name: "Test members name 2" }
    ]
  };

  describe("shallow render", () => {
    let wrapper, select;
    beforeEach(() => {
      wrapper = shallow(<Team members={mockState.teamMembers} />);
      select = findByAttribute(wrapper);
    });

    it("Should render without errors", () => {
      componentRenders(wrapper, "teamComponent");
    });
    it("Should render a list of team members", () => {
      const element = select("teamMembersList");
      expect(element.length).toBe(1);
    });
  });

  describe("mount render", () => {
    const members = mockState.teamMembers;
    let store, wrapper;
    beforeEach(() => {
      store = mockStore(mockState);
      wrapper = mount(
        <Team store={store} members={members} fetchMembers={mockFetchMembers} />
      );
    });

    it("Should mock fetchMembers", () => {
      expect(mockFetchMembers.mock.calls.length).toBe(1);
    });

    it("Should get members from props", () => {
      const props = wrapper.props();
      expect(props.members).toEqual(members);
    });
  });
});
