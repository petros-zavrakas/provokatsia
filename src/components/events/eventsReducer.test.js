import eventsReducer from "./eventsReducer";
import { types } from "../../components/events/eventsConstants";

describe("Events Combined Reducers", () => {
  it("Should return the default state", () => {
    const state = eventsReducer([], {});
    expect(state).toEqual([]);
  });

  it("Should return a new state", () => {
    const events = [
      { id: 1, title: "Event title 1", place: "place 1", date: "date 1" },
      { id: 2, title: "Event title 2", place: "place 2", date: "date 2" },
      { id: 3, title: "Event title 3", place: "place 3", date: "date 3" }
    ];

    const newState = eventsReducer(undefined, {
      type: types.FETCH_EVENTS_RECEIVED,
      payload: events
    });
    expect(newState).toEqual(events);
  });
});
