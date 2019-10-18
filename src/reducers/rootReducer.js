import { combineReducers } from "redux";
import events from "../components/events/eventsReducer";
import teamMembers from "../components/team/teamReducer";
import commonReducers from "../common/redux/reducers/commonReducers";

const rootReducer = combineReducers({
  events,
  teamMembers,
  commonReducers: commonReducers()
});

export default rootReducer;
