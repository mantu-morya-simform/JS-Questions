// 1.
const once = (callback) => {
  let hasRun = false;
  return (...args) => {
    if (!hasRun) {
      hasRun = true;
      callback(...args);
    }
  };
};
const initialize = once((a = 5, b = 6) => {
  console.log(a, b);
});
initialize(10, 20); // runs
initialize(); // ignored
initialize(); // ignored

// // 2.
// const once = (callback) => {
//   console.log("Hello satyam");
//   let hasRun = false;
//   return () => {
//     if (!hasRun) {
//       hasRun = true;
//       callback();
//     }
//   };
// };

// const initialize = once(() => console.log("Initialized"));
// initialize(); // runs
// initialize(); // ignored
// initialize(); // ignored

// // 3.

// const once = (callback) => {
//   console.log("Hello satyam");
//   let hasRun = false;
//   return () => {
//     if (!hasRun) {
//       hasRun = true;
//       callback();
//     }
//   };
//   console.log("Hello Krish");
// };

// const initialize = once(() => console.log("Initialized"));
// initialize(); // runs
// initialize(); // ignored
// initialize(); // ignored

// // 4.
// const once = (callback) => {
//   console.log("Hello satyam");
//   let hasRun = false;
//   return () => {
//     if (!hasRun) {
//       hasRun = true;
//       callback();
//     } else {
//       console.log("Hello");
//     }
//   };
//   console.log("Hello Krish");
// };

// const initialize = once(() => console.log("Initialized"));
// initialize(); // runs
// initialize(); // ignored
// initialize(); // ignored
