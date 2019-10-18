import { types } from "./teamConstants";
import { fetchDataAction } from "../../common/redux/actions/commonActions";

export const fetchMembers = () =>
  fetchDataAction({
    type: types.FETCH_MEMBERS,
    dataType: "teamMembers"
  });
