import teamReducer from "./teamReducer";
import { types } from "./teamConstants";

describe("Team Reducer", () => {
  it("Returns the initial state", () => {
    const teamMembers = teamReducer([], {});
    expect(teamMembers).toEqual([]);
  });

  it("Should return a new state", () => {
    const teamMembers = [
      { id: 1, name: "Test name 1" },
      { id: 2, name: "Test name 2" }
    ];
    const newState = teamReducer(undefined, {
      type: types.FETCH_MEMBERS_RECEIVED,
      payload: teamMembers
    });
    expect(newState).toEqual(teamMembers);
  });
});
