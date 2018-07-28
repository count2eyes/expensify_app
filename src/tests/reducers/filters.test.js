import moment from "moment";
import filterReducer from "../../reducers/filters";

const defaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

test("should set default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual(defaultState);
});

test("should set sort by amount filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filterReducer(currentState, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by date filter", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filterReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set set startDate filter", () => {
  const currentState = {
    text: "",
    sortBy: "",
    endDate: undefined,
    startDate: undefined
  };
  const state = filterReducer(currentState, {
    type: "SET_START_DATE",
    startDate: moment(0)
  });
  expect(state).toEqual({
    text: "",
    sortBy: "",
    endDate: undefined,
    startDate: moment(0)
  });
});

test("should set set endDate filter", () => {
  const currentState = {
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  };
  const state = filterReducer(currentState, {
    type: "SET_END_DATE",
    endDate: moment(0)
  });
  expect(state).toEqual({
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: moment(0)
  });
});

test("should set set text filter", () => {
  const currentState = {
    text: "",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  };
  const state = filterReducer(currentState, {
    type: "SET_TEXT_FILTER",
    text: "din"
  });
  expect(state.text).toBe("din");
});
