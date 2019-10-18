import { DATA_ACTION } from "../constants/commonConstants";
import dataService from "../../../services/dataService";

const fetchDataMiddleware = store => next => async action => {
  if (action[DATA_ACTION]) {
    const actionInfo = action[DATA_ACTION];

    store.dispatch({
      type: `${actionInfo.type}_REQUESTED`
    });
    try {
      const data = await dataService.getData(actionInfo.dataType);
      next({
        type: `${actionInfo.type}_RECEIVED`,
        payload: data
      });
    } catch (error) {
      next({
        type: `${actionInfo.type}_FAILED`,
        message: error.message || "Something went wrong."
      });
    }
  } else {
    return next(action);
  }
};

export { fetchDataMiddleware };
