import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Coffee",
//   amount: 275,
//   note: "",
//   createdAt: 646513
// });

// database.ref("expenses").push({
//   description: "Rent",
//   amount: 21275,
//   note: "",
//   createdAt: 6843514358
// });

// database.ref("expenses").push({
//   description: "Shoes",
//   amount: 1125,
//   note: "",
//   createdAt: 684354684
// });

// database
//   .ref()
//   .set({
//     name: "Andrew Mead",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: { city: "Philadelphia", country: "United States" }
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(e => {
//     console.log("This failed, ", e);
//   });

// const onDataChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(
//       `${snapshot.val().name} is a ${snapshot.val().job.title} at ${
//         snapshot.val().job.company
//       }`
//     );
//   },
//   e => {
//     console.log("There! you can have no more. ", e);
//   }
// );

// setTimeout(() => {
//   database.ref().update({ "job/company": "Google" });
// }, 2500);

// setTimeout(() => {
//   database.ref().update({ "job/title": "UX Designer" });
// }, 5000);

// setTimeout(() => {
//   database.ref().off(onDataChange);
// }, 7500);

// setTimeout(() => {
//   database.ref().update({ "location/city": "New York" });
// }, 10000);

// database
//   .ref("attribute")
//   .set({
//     height: "169cm",
//     weight: "73kg"
//   })
//   .then(() => {
//     console.log("second set call worked");
//   })
//   .catch(e => {
//     console.log("things didn't go well for the second call, error ", e);
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("removed successfully");
//   })
//   .catch(e => {
//     console.log("could not remove, ", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });
