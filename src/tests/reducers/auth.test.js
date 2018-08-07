import authReducer from "../../reducers/auth";

test("should return authReducer for login correctly", () => {
  const uid = "shouldreturnauthReducerforlogincorrectly";
  const action = { type: "LOGIN", uid };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

test("should return authReducer for logout correctly", () => {
  const action = { type: "LOGOUT" };
  const state = authReducer({ uid: "literally anything" }, action);
  expect(state).toEqual({});
});
