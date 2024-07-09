// Challenge 1
function addTwo(num) {
  return num + 2;
}

// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + 's';
}

// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  let tempArray = [];
  for (let element of array) {
    tempArray.push(callback(element));
  }

  return tempArray;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0, n = array.length; i < n; i++) {
    array[i] = callback(array[i]);
  }
}

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function (char) {
//   alphabet += char;
// });
// console.log(alphabet); // prints 'abcd'

// Challenge 5
function mapWith(array, callback) {
  forEach(callback, array);
}

// Challenge 6
function reduce(array, callback, initialValue) {
  for (let i = 0, n = array.length; i < n; i++) {
    initialValue = callback(initialValue, array[i]);
  }

  return initialValue;
}

// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
function intersection(arrays) {
  let map = new Map();
  let res = [];

  reduce(
    arrays,
    (_, array) => {
      for (const element of array) {
        if (map.get(element) == undefined) {
          map.set(element, 1);
        } else {
          map.set(element, map.get(element) + 1);
        }
      }
    },
    []
  );

  map.forEach((value, key, map) => {
    map.get(key) == arrays.length && res.push(key);
  });

  return res;
}

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20]
//   ])
// );
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  let set = new Set();
  let res = [];

  reduce(
    arrays,
    (_, array) => {
      for (const element of array) {
        set.add(element);
      }
    },
    []
  );

  return Array.from(set);
}

// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5]
//   ])
// );
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const res = Object.create(null);
  for (let i = 0, n = array1.length; i < n; i++) {
    if (callback(array1[i]) == array2[i]) {
      res[array1[i]] = array2[i];
    }
  }

  return res;
}

// console.log(
//   objOfMatches(
//     ['hi', 'howdy', 'bye', 'later', 'hello'],
//     ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  let res = Object.create(null);

  for (let i = 0, n = arrVals.length; i < n; i++) {
    res[arrVals[i]] = [];
    for (let j = 0, len = arrCallbacks.length; j < len; j++) {
      res[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
    }
  }

  return res;
}

// console.log(
//   multiMap(
//     ['catfood', 'glue', 'beer'],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       }
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  let res = Object.create(null);
  for (const key of Object.keys(obj)) {
    if (obj[key] == callback(obj[key])) {
      res[key] = obj[key];
    }
  }

  return res;
}

// const cities = {
//   London: 'LONDON',
//   LA: 'Los Angeles',
//   Paris: 'PARIS'
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let res = 0;
  for (const value of array) {
    res += callback(value);
  }

  return res > array.length / 2 ? true : false;
}

// const isOdd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const first = array.filter((a) => callback(a) == true);
  const second = array.filter((a) => callback(a) == false);

  return first.concat(second);
}

// const startsWithS = function (str) {
//   return str[0] === 's' || str[0] === 'S';
// };
// console.log(
//   prioritize(
//     ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
//     startsWithS
//   )
// ); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends'];

// Challenge 14
function countBy(array, callback) {
  let res = {};

  for (const value of array) {
    if (!res[callback(value)]) {
      res[callback(value)] = 1;
    } else {
      res[callback(value)] += 1;
    }
  }

  return res;
}

// console.log(
//   countBy([1, 2, 3, 4, 5], function (num) {
//     if (num % 2 === 0) return 'even';
//     else return 'odd';
//   })
// ); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  let res = {};

  for (const value of array) {
    if (!res[callback(value)]) {
      res[callback(value)] = [value];
    } else {
      res[callback(value)].push(value);
    }
  }

  return res;
}

// const decimals = [1.3, 2.1, 2.4];
// const floored = function (num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  let res = [];

  for (const key of Object.keys(obj)) {
    if (callback(obj[key]) == true) {
      res.push(key);
    }
  }

  return res;
}

// const sunny = {
//   mac: 'priest',
//   dennis: 'calculating',
//   charlie: 'birdlaw',
//   dee: 'bird',
//   frank: 'warthog'
// };
// const startsWithBird = function (str) {
//   return str.slice(0, 4).toLowerCase() === 'bird';
// };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  return func2(func1(value)) == func1(func2(value));
}

// const multBy3 = (n) => n * 3;
// const divBy4 = (n) => n / 4;
// const subtract5 = (n) => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  let res = {};

  for (const key of Object.keys(obj)) {
    if (callback(key) == obj[key]) {
      res[key] = obj[key];
    }
  }

  return res;
}

// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  let trueCount = 0;
  for (const func of arrOfFuncs) {
    trueCount += func(value);
  }

  return (trueCount / arrOfFuncs.length) * 100;
}

// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  let res = value;
  for (let i = 0, n = arrOfFuncs.length; i < n; i++) {
    res = arrOfFuncs[i](res);
  }

  return res;
}

// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let maxValue = -Infinity;
  let maxValueFuncKey;
  for (const key of Object.keys(objOfFuncs)) {
    const calcResult = objOfFuncs[key](subject);
    if (calcResult > maxValue) {
      maxValue = calcResult;
      maxValueFuncKey = key;
    }
  }

  return maxValueFuncKey;
}

// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function myFunc(array, callback) {
  for (const [index, value] of array.entries()) {
    if (callback(value) == true) {
      return index;
    }
  }

  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 23
function myForEach(array, callback) {
  for (let i = 0, n = array.length; i < n; i++) {
    array[i] = callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6
