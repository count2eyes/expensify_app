import { login, logout } from "../../actions/auth";

test("should setup login action object", () => {
  const uid = "shouldsetuploginactionobject";
  const action = login(uid);
  expect(action).toEqual({ type: "LOGIN", uid: uid });
});

test("should setup login action object", () => {
  const action = logout();
  expect(action).toEqual({ type: "LOGOUT" });
});
