import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Events } from "./Events";

describe("Events Component", () => {
  const mockStore = configureStore();
  const mockFetchEvents = jest.fn();
  const mockState = {
    events: [
      { id: 1, title: "Test Event Title 1" },
      { id: 2, title: "Test Event Title 2" },
      { id: 3, title: "Test Event Title 3" }
    ]
  };

  describe("mount testing", () => {
    let store, wrapper;
    beforeEach(() => {
      store = mockStore(mockState);
      wrapper = mount(
        <Events
          store={store}
          fetchEvents={mockFetchEvents}
          upcomingEvents={mockState.events}
          previousEvents={mockState.events}
        />
      );
    });

    it("Should mock fetchEvents", () => {
      expect(mockFetchEvents.mock.calls.length).toBe(1);
    });
    it("Should get events from props", () => {
      const componentProps = wrapper.props();
      expect(componentProps.upcomingEvents).toEqual(mockState.events);
      expect(componentProps.previousEvents).toEqual(mockState.events);
    });
  });
});
