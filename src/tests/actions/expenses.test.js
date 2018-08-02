import configureStore from "redux-mock-store";
import thunk from "../../../node_modules/redux-thunk";
import {
  startAddExpense,
  addExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureStore([thunk]);

beforeEach(done => {
  const expenseData = {};

  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expenseData[id] = { description, amount, note, createdAt };
  });

  database
    .ref("expenses")
    .set(expenseData)
    .then(() => done());
});

test("remove expense action object", () => {
  const action = removeExpense({ id: "hello123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "hello123"
  });
});

test("should remove expense from firebase and dispatch removeExpense", done => {
  const id = expenses[0].id;
  const store = createMockStore({});
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id
      });
      return database.ref(`expenses/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test("should edit expense in store and firebase", done => {
  const store = createMockStore({});
  const id = expenses[1].id;
  const updates = { description: "Party", amount: 22500 };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: "EDIT_EXPENSE", id, updates });
      return database.ref(`expenses/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val().description).toBe("Party");
      expect(snapshot.val().amount).toBe(22500);
      done();
    });
});

test("should setup add expense action object w/ provided data", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "Pencil",
    amount: 4.75,
    note: "2B or not 2B",
    createdAt: 1000
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${action[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense w/ defaults to database and store", done => {
  const store = createMockStore({});
  const defaultData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...defaultData
        }
      });
      return database.ref(`expenses/${action[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultData);
      done();
    });
});

test("should setup setExpense action object w/ data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({ type: "SET_EXPENSES", expenses });
});

test("should fetch the expenses from firebase", done => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});
