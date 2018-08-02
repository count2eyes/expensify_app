import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpense";
import expenses from "../fixtures/expenses";

let history, startEditExpense, startRemoveExpense, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditExpensePage
      history={history}
      startEditExpense={startEditExpense} //2args
      startRemoveExpense={startRemoveExpense}
      expense={expenses[0]}
    />
  );
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle startEditExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[0].id,
    expenses[0]
  );
});

test("should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
});
