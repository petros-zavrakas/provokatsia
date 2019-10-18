import { types } from "./eventsConstants";
import { fetchDataAction } from "../../common/redux/actions/commonActions";

export const fetchEvents = () =>
  fetchDataAction({
    type: types.FETCH_EVENTS,
    dataType: "events"
  });
