import { types } from "./teamConstants";

const teamReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_MEMBERS_RECEIVED:
      return action.payload;
    default:
      return state;
  }
};

export default teamReducer;
