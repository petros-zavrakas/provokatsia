import { types } from "./eventsConstants";

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_EVENTS_RECEIVED:
      return action.payload;
    default:
      return state;
  }
};

export default eventsReducer;
