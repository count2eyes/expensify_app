import React from "react";
import moment from "moment";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";

import "react-dates/lib/css/_datepicker.css";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";

const store = configureStore();

// store.dispatch(
//   addExpense({
//     id: "1",
//     description: "Gum",
//     note: "",
//     amount: 109500,
//     createdAt: 0
//   })
// );
// store.dispatch(
//   addExpense({
//     id: "2",
//     description: "Rent",
//     note: "",
//     amount: 195,
//     createdAt: moment(0)
//       .subtract(4, "days")
//       .valueOf()
//   })
// );
// store.dispatch(
//   addExpense({
//     id: "3",
//     description: "Credit Card",
//     note: "",
//     amount: 4500,
//     createdAt: moment(0)
//       .add(4, "days")
//       .valueOf()
//   })
// );

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
