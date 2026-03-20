// 1.
const once = (callback, count) => {
  let hasRun = 1;
  return (...args) => {
    if (hasRun <= count) {
      hasRun++;
      callback(...args);
    }
  };
};

const add = (a, b) => {
  console.log(`The Addition Of two numbers is : ${a + b}`);
};

//runs only Three Times
const count = 3;
const initialize = once(add, count);
initialize(10, 20); // runs
initialize(8, 5); // runs
initialize(2, 9); // runs
initialize(); // ignored
initialize(); // ignored
initialize(); // ignored
initialize(); // ignored
