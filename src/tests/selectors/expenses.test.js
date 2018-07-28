import moment from "moment";
import selectors from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

const filters = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

test("should return sort by text with default value", () => {
  const result = selectors(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should return sort by text", () => {
  const filters = {
    text: "ffe",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date"
  };
  const result = selectors(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

test("should return sort by startDate", () => {
  const filters = {
    text: "",
    startDate: moment(0),
    endDate: undefined,
    sortBy: "date"
  };
  const result = selectors(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should return sort by endDate", () => {
  const filters = {
    text: "",
    startDate: undefined,
    endDate: moment(0).add(2, "days"),
    sortBy: "date"
  };
  const result = selectors(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should return sort by date", () => {
  const result = selectors(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should return sort by amount", () => {
  const filters = { text: "", sortBy: "amount", startDate: 0, endDate: 0 };
  const result = selectors(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
