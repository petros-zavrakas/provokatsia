import commonReducers from "./commonReducers";

let commonReducer;
beforeEach(() => {
  commonReducer = commonReducers();
});

describe("isFetching reducer", () => {
  it("Should return the default state", () => {
    const state = commonReducer(
      { isFetching: false, errorMessage: false },
      { type: "TEST" }
    ).isFetching;
    expect(state).toBe(false);
  });

  it("Should return a new state", () => {
    const newState = commonReducer(undefined, {
      type: "TEST_REQUESTED",
      payload: true
    }).isFetching;
    expect(newState).toBe(true);
  });
});

describe("errorMessage reducer", () => {
  it("Should return the default state", () => {
    const state = commonReducer(
      { isFetching: false, errorMessage: false },
      { type: "TEST" }
    ).errorMessage;
    expect(state).toBe(false);
  });

  it("Should return a new state", () => {
    const error = "Test Error Message";
    const newState = commonReducer(undefined, {
      type: "TEST_FAILED",
      message: error
    }).errorMessage;
    expect(newState).toEqual(error);
  });
});
