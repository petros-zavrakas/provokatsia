import React from "react";
import { shallow, mount } from "enzyme";
import {
  findByAttribute,
  componentRenders
} from "../../common/utils/testUtils";
import EventsList from "./EventsList";

describe("EventsList Component", () => {
  let props = {
    events: [
      { id: 1, title: "Test title 1" },
      { id: 2, title: "Test title 2" },
      { id: 3, title: "Test title 3" }
    ],
    title: "Testing Title"
  };

  describe("shallow test", () => {
    let wrapper;
    let select;
    beforeEach(() => {
      wrapper = shallow(<EventsList {...props} />);
      select = findByAttribute(wrapper);
    });

    it("Should render without erros", () => {
      componentRenders(wrapper, "eventsListComponent");
    });
  });

  describe("mount test", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<EventsList {...props} />);
    });

    it("Should get props", () => {
      const eventsProps = wrapper.props();
      expect(eventsProps.events).toEqual(props.events);
      expect(eventsProps.title).toEqual(props.title);
    });
  });
});
