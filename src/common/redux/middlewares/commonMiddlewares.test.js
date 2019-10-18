import configureStore from "redux-mock-store";
import { fetchDataMiddleware } from "./commonMiddlewares";

describe("Common Middleware", () => {
  const middlewares = [fetchDataMiddleware];
  const mockStore = configureStore(middlewares);

  describe("Fetch Data Middleware", () => {
    let store;
    beforeEach(() => {
      store = mockStore();
    });

    it("Should execute fetchData middleware", () => {
      const action = { type: "TEST_ACTION", dataType: "test" };
      const expectedActions = [
        { type: "TEST_ACTION_REQUESTED" },
        { type: "TEST_ACTION_FAILED" }
      ];
      store.dispatch({ DATA_ACTION: action }).then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
      });
    });
  });
});
