import React from "react";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { connect } from "react-redux";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseString = expenseCount > 1 ? "expenses" : "expense";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");

  return (
    <div>
      <h4>
        Viewing {expenseCount} {expenseString} totalling{" "}
        {formattedExpensesTotal}
      </h4>
    </div>
  );
};
const mapStateToProps = state => {
  const visilbleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visilbleExpenses.length,
    expensesTotal: selectExpensesTotal(visilbleExpenses)
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
