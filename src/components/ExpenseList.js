import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <h3>You have no expense history</h3>
    ) : (
      props.expenses.map(el => {
        return <ExpenseListItem {...el} key={el.id} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
