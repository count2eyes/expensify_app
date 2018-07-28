import expenses from "../fixtures/expenses";
import expenseReducer from "../../reducers/expenses";
import moment from "moment";

test("should return default expenses", () => {
  expect(expenseReducer(undefined, { type: "@@INIT" })).toEqual([]);
});

test("should remove expense item", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[2].id };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1]]);
});

test("should not remove expense item", () => {
  const action = { type: "REMOVE_EXPENSE", id: -1 };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should update expense item", () => {
  const updates = { amount: 27050 };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    { ...expenses[2], ...updates }
  ]);
});

test("should update expense item", () => {
  const updates = { amount: 27050 };
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("should add expense item", () => {
  const newExpenseItem = {
    amount: 250,
    description: "candy",
    note: "",
    createdAt: moment(0).add(2, "days"),
    id: 4
  };
  const action = { type: "ADD_EXPENSE", expense: newExpenseItem };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpenseItem]);
});
