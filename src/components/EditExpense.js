import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    // earlier code
    // this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(el => el.id === props.match.params.id)
  };
};

// also passed 'props' as 2nd argument for startRemoveExpense required props
//
// const mapDispatchToProps = (dispatch, props) => ({
//   startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
//   startRemoveExpense: id => dispatch(startRemoveExpense(id))
// });

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
