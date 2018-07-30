export default expenses => {
  return expenses
    .map(el => {
      return el.amount;
    })
    .reduce((acc, curr) => acc + curr, 0);
};
