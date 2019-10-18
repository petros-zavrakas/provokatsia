import moment from "moment";

const today = moment().format();

export const selectUpcomingEvents = state =>
  state.events.filter(event => today < event.date);

export const selectPreviousEvents = state =>
  state.events.filter(event => today > event.date).reverse();
