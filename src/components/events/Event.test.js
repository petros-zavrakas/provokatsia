import React from "react";
import { shallow, mount } from "enzyme";
import {
  findByAttribute,
  componentRenders
} from "../../common/utils/testUtils";
import Event from "./Event";

describe("Event Component", () => {
  const props = {
    event: {
      id: 2,
      title: "Provokatsia - Vol 2",
      place: "Test address",
      mapsLink: "test-link",
      address: "Some Address",
      facebookEvent: "facebook link",
      date: "2018-10-10"
    }
  };

  describe("mount", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Event {...props} />);
    });

    it("Should get event from props", () => {
      const eventProps = wrapper.props();
      expect(eventProps.event).toEqual(props.event);
    });
  });

  describe("shallow render", () => {
    let wrapper;
    let select;
    beforeEach(() => {
      wrapper = shallow(<Event {...props} />);
      select = findByAttribute(wrapper);
    });

    it("Should render without errors", () => {
      componentRenders(wrapper, "eventComponent");
    });
    it("Should render a date", () => {
      const element = select("eventDate");
      expect(element.length).toBe(1);
    });
    it("Should render a title", () => {
      const element = select("eventTitle");
      expect(element.length).toBe(1);
    });
    it("Should render the place", () => {
      const element = select("eventPlace");
      expect(element.length).toBe(1);
    });
    it("Should render actions", () => {
      const element = select("eventActions");
      expect(element.length).toBe(1);
    });
  });
});
