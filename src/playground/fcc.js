// if (!Array.prototype.some) {
//   Array.prototype.some = function(fun /*, thisArg*/) {
//     "use strict";

//     if (this == null) {
//       throw new TypeError("Array.prototype.some called on null or undefined");
//     }

//     if (typeof fun !== "function") {
//       throw new TypeError();
//     }

//     var t = Object(this);
//     var len = t.length >>> 0;

//     var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
//     for (var i = 0; i < len; i++) {
//       if (i in t && fun.call(thisArg, t[i], i, t)) {
//         return true;
//       }
//     }

//     return false;
//   };
// }
// function sym(args) {
//   var myArr = [...arguments];

//   function myReduce(a, b) {
//     const resArr = [];
//     a.forEach(el => {
//       if (b.indexOf(el) < 0 && resArr.indexOf(el) < 0) {
//         resArr.push(el);
//       }
//     });
//     b.forEach(el => {
//       if (a.indexOf(el) < 0 && resArr.indexOf(el) < 0) {
//         resArr.push(el);
//       }
//     });
//     return resArr;
//   }
//   return myArr.reduce(myReduce);
// }
//////////////////////////////////////////////////////////////////////////////////////
// function sym() {
//   return [...arguments]
//     .reduce((a, b) => {
//       function filterFunction(a, b) {
//         return a.filter(el => {
//           return b.indexOf(el) === -1;
//         });
//       }
//       return filterFunction(a, b).concat(filterFunction(b, a));
//     }, [])
//     .filter((elem, index, self) => index === self.lastIndexOf(elem))
//     .sort((a, b) => a - b);
// }
///////////////////////////////////////////////////////////////////////////////////
// function sym(args) {
//   return [...arguments]
//     .reduce((a, b) => {
//       function myReduce(a, b) {
//         return a.filter(el => b.indexOf(el) === -1);
//       }
//       return myReduce(a, b).concat(myReduce(b, a));
//     })
//     .filter((el, i, arr) => i === arr.lastIndexOf(el))
//     .sort((a, b) => a - b);
// }
//////////////////////////////////////////////////////////////////////////////////
// function sym() {
//   function difFun(acc, curr) {
//     return new Set([...acc].filter(el => !curr.has(el)));
//   }

//   return Array.from(
//     [...arguments]
//       .map(el => new Set(el))
//       .reduce((acc, set) => new Set([...difFun(acc, set), ...difFun(set, acc)]))
//   ).sort((a, b) => a - b);
// }
//////////////////////////////////////////////////////////////////////////////////
// function sym() {
//   return [...arguments]
//   .reduce(function(prev, current) {
//     prev = Array.from(new Set(prev));
//     current = Array.from(new Set(current));

//     return prev
//     .concat(current)
//     .filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
//   })
//   .sort((a, b) => a - b);
// }
//////////////////////////////////////////////////////////////////////////////////
// function sym(args) {
//   return [...arguments]
//     .reduce((a, b) => {
//       return a
//         .map(el => {
//           if (!b.includes(el)) return el;
//         })
//         .concat(
//           b.map(el => {
//             if (!a.includes(el)) return el;
//           })
//         );
//     })
//     .filter((el, i, arr) => el && i === arr.lastIndexOf(el))
//     .sort((a, b) => a - b);
// }
//////////////////////////////////////////////////////////////////////////////////
// function sym() {
//   // Convert arguments into an array and eliminate duplicate elements
//   // within each argument.
//   return (
//     [...arguments]
//       .map(arg => [...new Set(arg)])
//       // concatenate successive arguments a and b
//       .reduce((a, b) =>
//         a
//           .concat(b)
//           // elements that are in both a and b will appear twice, filter
//           // these out to get the Symmetric Difference
//           .filter(
//             (el, i, arr) =>
//               !(arr.indexOf(el) < i || arr.indexOf(el, i + 1) > -1)
//           )
//       )
//       .sort((a, b) => a - b)
//   );
// }
//////////////////////////////////////////////////////////////////////////////////
// const sym = (...args) =>
// args
// .reduce((acc, val) =>
// acc.concat(val).filter(x => !val.includes(x) || !acc.includes(x))
// )
// .filter((x, i, self) => self.indexOf(x) == i)
// .sort((a, b) => a - b);
//////////////////////////////////////////////////////////////////////////////////
// function sym(args) {
//   return [
//     ...new Set(
//       Array.from(arguments).reduce((A, B) =>
//       A.filter(el => B.indexOf(el) < 0).concat(
//         B.filter(el => A.indexOf(el) < 0)
//       )
//     )
//   )
// ];
// }
//////////////////////////////////////////////////////////////////////////////////
// function sym(args) {
//   var symDiff = Array.prototype.slice
//     .call(arguments)
//     .reduce(function(acc, arr) {
//       for (var i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) === i) {
//           if (~acc.indexOf(arr[i])) {
//             acc.splice(acc.indexOf(arr[i]), 1);
//           } else {
//             acc.push(arr[i]);
//           }
//         }
//       }
//       return acc;
//     }, []);
//   return symDiff;
// }
//////////////////////////////////////////////////////////////////////////////////
// function sym(arr) {
//   return arr.map(el => {
//     if (Boolean(el)) return el;
//   });
//   // .filter(Boolean);
// }
// console.log(
//   sym([NaN, -1, 0, false, 1, "", 2, null, 3, undefined], [5, 2, 1, 4])
// ); //should return [3, 4, 5].
// console.log(sym([1, 2, 3], [5, 2, 1, 4])); //should contain only three elements.
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); //should return [3, 4, 5].
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); //should contain only three elements.
// console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); //should return [3, 4, 5].
// console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); //should contain only three elements.
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); //should return [1, 4, 5]
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); //should contain only three elements.
// console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); //should return [1, 4, 5].
// console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); //should contain only three elements.
// console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); //should return [2, 3, 4, 6, 7].
// console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); //should contain only five elements.
// console.log(
//   sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
// ); //should return [1, 2, 4, 5, 6, 7, 8, 9].
// console.log(
//   sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
// ); //should contain only eight elements.
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// function updateInventory(arr1, arr2) {
//   const newArr = [...arguments].reduce((acc, curr) => {
//     return acc.concat(curr);
//   }, []);
//   return Array.from(new Set(newArr.map(el => el[1])))
//     .sort()
//     .map((el, i, arr) => {
//       let count;
//       newArr.reduce((acc, curr) => {
//         if (curr.includes(el)) {
//           acc = acc + curr[0];
//           count = acc;
//           return acc;
//         }
//         return acc + 0;
//       }, 0);
//       return [count, el];
//     });
// }
//////////////////////////////////////////////////////////////////////////////////
// function updateInventory(arr1, arr2) {
//   for (let j = 0; j < arr2.length; j++) {
//     const index = ((one, two) => {
//       for (let i = 0; i < one.length; i++) {
//         if (one[i][1] === two) return i;
//       }
//     })(arr1, arr2[j][1]);

//     if (index === undefined) {
//       arr1.push(arr2[j]);
//     } else {
//       arr1[index][0] += arr2[j][0];
//     }
//   }
//   return arr1.sort((a, b) => (a[1] > b[1] ? 1 : -1));
// }
//////////////////////////////////////////////////////////////////////////////////
// function updateInventory(arr1, arr2) {
//   // All inventory must be accounted for or you're fired!

//   var index;
//   var arrCurInvName = []; // Names of arr1's items
//   var arrNewInvName = []; // Names of arr2's items

//   // Same as using two for loops, this takes care of increasing the number of stock quantity.
//   arr1.map(item1 => {
//     return arr2.map(item2 => {
//       if (item1[1] === item2[1]) {
//         item1[0] = item1[0] + item2[0]; //Increase number of stock
//       }
//     });
//   });

//   // Get item's name for new Inventory
//   arr2.map(item => {
//     arrNewInvName.push(item[1]);
//   });

//   // Get item's name for Current Inventory
//   arr1.map(item => {
//     arrCurInvName.push(item[1]);
//   });

//   // Add new inventory items to current inventory.
//   arrNewInvName.map(item => {
//     if (arrCurInvName.indexOf(item) === -1) {
//       index = arrNewInvName.indexOf(item);
//       arr1.push(arr2[index]);
//     }
//   });

//   return arr1.sort((currItem, nextItem) => {
//     return currItem[1] > nextItem[1] ? 1 : -1;
//   });
// }
//////////////////////////////////////////////////////////////////////////////////
// function updateInventory(arr1, arr2) {
//   const inventory = Array.prototype.concat.apply([], arr1);
//   console.log(inventory);

//   arr2.forEach(el => {
//     const quantity = el[0];
//     const item = el[1];

//     const position = inventory.indexOf(item);

//     if (position !== -1) {
//       const row = Math.floor(position / 2);
//       arr1[row][0] += quantity;
//       return;
//     }
//     arr1.push(el);
//   });

//   return arr1.sort((a, b) => (a[1] > b[1] ? 1 : -1));
// }
// console.log(
//   updateInventory(
//     [
//       [21, "Bowling Ball"],
//       [2, "Dirty Sock"],
//       [1, "Hair Pin"],
//       [5, "Microphone"]
//     ],
//     [
//       [2, "Hair Pin"],
//       [3, "Half-Eaten Apple"],
//       [67, "Bowling Ball"],
//       [7, "Toothpaste"]
//     ]
//   )
// ); // should return an array with a length of 6.
// console.log(
//   updateInventory(
//     [
//       [21, "Bowling Ball"],
//       [2, "Dirty Sock"],
//       [1, "Hair Pin"],
//       [5, "Microphone"]
//     ],
//     [
//       [2, "Hair Pin"],
//       [3, "Half-Eaten Apple"],
//       [67, "Bowling Ball"],
//       [7, "Toothpaste"]
//     ]
//   )
// ); // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// console.log(
//   updateInventory(
//     [
//       [21, "Bowling Ball"],
//       [2, "Dirty Sock"],
//       [1, "Hair Pin"],
//       [5, "Microphone"]
//     ],
//     []
//   )
// ); // should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// console.log(
//   updateInventory(
//     [],
//     [
//       [2, "Hair Pin"],
//       [3, "Half-Eaten Apple"],
//       [67, "Bowling Ball"],
//       [7, "Toothpaste"]
//     ]
//   )
// ); // should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// console.log(
//   updateInventory(
//     [
//       [0, "Bowling Ball"],
//       [0, "Dirty Sock"],
//       [0, "Hair Pin"],
//       [0, "Microphone"]
//     ],
//     [
//       [1, "Hair Pin"],
//       [1, "Half-Eaten Apple"],
//       [1, "Bowling Ball"],
//       [1, "Toothpaste"]
//     ]
//   )
// ); // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// function pairwise(arr, arg) {
// var count = [];
// arr.forEach((el, i) => {
//   if (typeof el !== "number") return;
//   arr.slice(i + 1).some((anoEl, j) => {
//     if (typeof anoEl !== "number") return;
//     if (el + anoEl === arg) {
//       count.push(i, j + i + 1);
//       delete arr[i];
//       delete arr[j + i + 1];
//       return !arr[i];
//     }
//   });
// });
// return count.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
//////////////////////////////////////////////////////////////////////////////////
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === arg) {
//       sum += i + j;
//       arr[i] = arr[j] = void 0;
//     }
//   }
// }
// return sum;
//////////////////////////////////////////////////////////////////////////////////
// const newArr = arr.slice();

// return newArr.reduce((acc, curr, index) => {
//   const search = arg - curr;
//   if (newArr.indexOf(search) !== -1 && newArr.indexOf(search) !== index) {
//     const toPush = index + newArr.indexOf(search);
//     newArr.splice(index, 1, NaN);
//     newArr.splice(newArr.indexOf(search), 1, NaN);
//     return acc + toPush;
//   }
//   return acc;
// }, 0);
//   return arr.reduce((acc, curr, index, someArr) => {
//     for (let j = index + 1; j < someArr.length; j++) {
//       if (curr + someArr[j] === arg) {
//         acc += index + j;
//         someArr[j] = NaN;
//         break;
//       }
//     }
//     return acc;
//   }, 0);
// }
// function pairwise(arr, arg) {
//   return arr.reduce((acc, num, i, a) => {
//     let z = a.indexOf(arg - num, i + 1);
//     return z > 0 ? ((a[z] = NaN), acc + i + z) : acc;
//   }, 0);
// }
// console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); //should return 11.
// console.log(pairwise([1, 3, 2, 4], 4)); //should return 1.
// console.log(pairwise([1, 1, 1], 2)); //should return 1.
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); //should return 10.
// console.log(pairwise([], 100)); //should return 0.
// console.log(pairwise([0, 0], 0)); //should return 1.
//////////////////////////////////////////////////////////////////////////////////
function bubbleSort(array) {
  const testArr = [].concat(array);
  function sortFunction(someArr) {
    someArr.forEach((el, index, arr) => {
      if (el > arr[index + 1]) {
        let bufferVar = el;
        arr[index] = arr[index + 1];
        arr[index + 1] = bufferVar;
        sortFunction(arr);
      }
    });
  }
  sortFunction(testArr);
  return testArr;
}

// test array:
console.log(
  bubbleSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ])
);
