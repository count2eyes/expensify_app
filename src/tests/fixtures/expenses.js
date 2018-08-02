import moment from "moment";

export default [
  {
    id: "1",
    description: "coffee",
    amount: 2650,
    note: "",
    createdAt: 0
  },
  {
    id: "2",
    description: "breakfast",
    amount: 20065,
    note: "",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "dinner",
    amount: 32065,
    note: "",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
