import { combineReducers } from "redux";
import * as selectors from "../selectors/commonSelectors";

const commonReducers = () => {
  const isFetching = (state = false, action) => {
    if (action.type.includes("_REQUESTED")) return true;
    if (action.type.includes("_FAILED") || action.type.includes("_RECEIVED"))
      return false;

    return state;
  };
  const errorMessage = (state = null, action) => {
    if (action.type.includes("_FAILED")) return action.message;
    if (action.type.includes("_REQUESTED") || action.type.includes("_RECEIVED"))
      return null;

    return state;
  };

  return combineReducers({
    isFetching,
    errorMessage
  });
};

export default commonReducers;

export const getErrorMessage = state =>
  selectors.selectErrorMessage(state.commonReducers);
export const getIsFetching = state =>
  selectors.selectIsFetching(state.commonReducers);
