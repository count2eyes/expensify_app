import moment from "moment";
import selectExpensesTotal from "../../selectors/expenses-total";

export const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 109500,
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 195,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

test("should return 0 if no expenses", () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test("should correctly add up a single expense", () => {
  const total = selectExpensesTotal([expenses[1]]);
  expect(total).toBe(expenses[1].amount);
});

test("should correctly add up multiple expenses", () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(114195);
});
