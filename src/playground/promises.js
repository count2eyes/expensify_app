const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ some: "name", notFound: "here" });
    reject("Nowhere to be found");
  }, 3000);
});

console.log("before");

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("error: ", error);
  });

console.log("after");
