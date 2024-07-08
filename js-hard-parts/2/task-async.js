/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}

// testMe();

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log('welcome'), 3000);
}

//delayedGreet();

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log('Hello');
  setTimeout(() => console.log('goodbye'), 2000);
}

// helloGoodbye();

/* CHALLENGE 4 */

function brokenRecord() {
  setInterval(() => console.log('hi again'), 1000);
}

// brokenRecord();

/* CHALLENGE 5 */

function limitedRepeat() {
  const intervalId = setInterval(() => console.log('hi for now'), 1000);
  setTimeout(() => clearInterval(intervalId), 5001);
}

// limitedRepeat();

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  const intervalId = setInterval(func, interval * 1000);
  setTimeout(() => clearInterval(intervalId), duration * 1000 + 5);
}

function theEnd() {
  console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 1, 5);

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  let num = 1;
  function foo() {
    const intervalId = setInterval(() => {
      if (num === target) clearInterval(intervalId);
      console.log(num);
      num += 1;
    }, wait);
  }

  return foo;
}

// const countLogger = delayCounter(8, 2000);
// countLogger();

/* CHALLENGE 8 */

function promised(val) {
  let promise = new Promise((resolve) =>
    setTimeout(() => {
      resolve(val);
    }, 2000)
  );

  return promise;
}

// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.intervalId = undefined;
  }

  start() {
    let seconds = 1;
    this.intervalId = setInterval(() => {
      this.cb(seconds);
      seconds++;
      if (seconds === 61) {
        seconds = 1;
      }
    }, 1000);
  }

  reset() {
    clearInterval(this.intervalId);
  }
}

// const clock = new SecondClock((val) => {
//   console.log(val);
// });
// console.log('Started Clock.');
// clock.start();
// setTimeout(() => {
//   clock.reset();
//   console.log('Stopped Clock after 6 seconds.');
// }, 6007);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  let duration = 0;
  let intervalId = 0;

  function foo() {
    if (duration <= 0) {
      duration = interval;
      clearInterval(intervalId);
      intervalId = setInterval(() => (duration -= 1000), 1000);

      return callback();
    }
  }

  return foo;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() {
//   return 'hi';
// }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes());
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 2000);
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 4000);
// setTimeout(function () {
//   console.log(giveHiSometimes());
// }, 8000);
