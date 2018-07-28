import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("remove expense action object", () => {
  const action = removeExpense({ id: "hello123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "hello123"
  });
});

test("edit expense action object", () => {
  const action = editExpense("hello123", { amount: 23 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "hello123",
    updates: { amount: 23 }
  });
});

test("add expense action object", () => {
  const expenseVar = {
    description: "new expense",
    note: "added note",
    amount: "some money",
    createdAt: "sometime ago"
  };
  const action = addExpense(expenseVar);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseVar,
      id: expect.any(String)
    }
  });
});

test("add expense action object when no argument passed", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      note: "",
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
