// CHALLENGE 1
function createFunction() {
  function sayHello() {
    console.log('Hello');
  }
  return sayHello;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
//function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  function printArg() {
    console.log(input);
  }
  return printArg;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  function adder(input) {
    return input + x;
  }

  return adder;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)) // => should return 3
// console.log(addByTwo(2)) // => should return 4
// console.log(addByTwo(3)) // => should return 5

// const addByThree = addByX(3);
// console.log(addByThree(1)) // => should return 4
// console.log(addByThree(2)) // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  let firstTime = true;
  let returnedOutput = undefined;
  function oncePrinter(input) {
    if (firstTime) {
      returnedOutput = func(input);
      firstTime = false;
    }

    return returnedOutput;
  }

  return oncePrinter;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
  let invokeCount = 0;
  function decide() {
    invokeCount++;
    if (invokeCount < count) {
      return;
    }

    func();
  }

  return decide;
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait) {}

// CHALLENGE 7
function rollCall(names) {
  let nameIndex = 0;
  function callName() {
    if (nameIndex >= names.length) {
      console.log('Everyone accounted for');
    } else {
      console.log(names[nameIndex]);
    }
    nameIndex++;
  }

  return callName;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  let memos = {};
  function foo(input) {
    if (input === magicWord) {
      return memos;
    } else {
      let result = func(input);
      memos[input] = result;
      return result;
    }
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let count = 0;
  function foo() {
    if (count === array.length) {
      count = 0;
    }

    count++;
    return array[count - 1];
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  function foo(input) {
    return func(arg, input);
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function (big, small) {
//   return big - small;
// };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  function foo(input) {
    return {
      timestamp: new Date().toDateString(),
      output: func(input)
    };
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  let memos = {};
  function foo(str1, str2 = '') {
    if (str2) {
      memos[str1] = str2;
    } else {
      let copy = str1;
      Object.keys(memos).map((key) => {
        copy = copy.replace(key, memos[key]);
      });

      return copy;
    }
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  let secretManager = {
    getSecret() {
      console.log(secret);
    },

    setSecret(input) {
      secret = input;
    }
  };

  return secretManager;
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5);
// obj.getSecret(); // => returns 5
// obj.setSecret(2);
// obj.getSecret(); // => returns 2

// CHALLENGE 14
function callTimes() {
  let invokeCount = 0;
  function foo() {
    invokeCount++;

    console.log(invokeCount);
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

// CHALLENGE 15
function roulette(num) {
  let invokeCount = 0;
  function foo() {
    invokeCount++;
    if (invokeCount <= num - 1) {
      return 'spin';
    } else if (invokeCount === num) {
      return 'win';
    } else {
      return 'pick a num to play again';
    }
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  let numbers = [];
  function foo(num = undefined) {
    if (num) {
      numbers.push(num);
    }
    if (numbers.length === 0) {
      return 0;
    }

    let sum = numbers.reduce((s, n) => (s += n), 0);

    return sum / numbers.length;
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  function foo(func) {
    for (const arr of arrOfTests) {
      if (func(arr[0]) !== arr[1]) {
        return false;
      }
    }

    return true;
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = (str) => str.toUpperCase();
// const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  let history = [];
  function foo(str) {
    switch (str) {
      case 'undo':
        if (history.length === 0) {
          return 'nothing to undo';
        }
        return `${history.pop()} undone`;
      default:
        if (history.length === limit) {
          history.shift();
        }
        history.push(str);
        return `${str} done`;
    }
  }

  return foo;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  function dealer(num1, num2) {
    let playerInvokeCnt = 0,
      busted = false,
      recentCardSum = num1 + num2;

    function player() {
      playerInvokeCnt++;

      if (busted) {
        return 'you are done';
      }

      const cardSum = recentCardSum;
      const nextCard = array[0];

      if (playerInvokeCnt === 1) {
        return cardSum;
      } else {
        if (nextCard + cardSum <= 21) {
          array.shift();
          recentCardSum = nextCard + cardSum;
          return nextCard + cardSum;
        } else {
          busted = true;
          return 'bust';
        }
      }
    }

    return player;
  }

  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11
]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
