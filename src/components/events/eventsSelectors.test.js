import * as selectors from "./eventsSelectors";
import moment from "moment";

describe("Events Selectors", () => {
  const today = moment().format();
  const tomorrow = moment(today)
    .add(1, "days")
    .format();
  const yesterday = moment(today)
    .add(-1, "days")
    .format();

  it("Should return an upcoming & previous event", () => {
    const state = {
      events: [
        { id: 1, title: "Upcoming event", date: tomorrow },
        { id: 2, title: "Previous event", date: yesterday }
      ]
    };
    const upcomingEvent = selectors.selectUpcomingEvents(state);
    expect(upcomingEvent[0].id).toEqual(state.events[0].id);

    const previousEvent = selectors.selectPreviousEvents(state);
    expect(previousEvent[0].id).toEqual(state.events[1].id);
  });
});
