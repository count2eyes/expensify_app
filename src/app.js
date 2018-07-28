import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";

import "react-dates/lib/css/_datepicker.css";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 4500,
    createdAt: 0
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    createdAt: 91050200,
    amount: 7200
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500,
    createdAt: -91050200
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
