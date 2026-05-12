// 1. Create execute pipeline for numbers

const numbers = [1, 2, 3, 4];

// 1. using two map

// Array.prototype.execute = function (...fns) {
//   let arr = this;
//   let res = [];
//   arr.map((data, index) => {
//     let num = data;
//     fns.map((fn) => {
//       num = fn(num);
//     });
//     res[index] = num;
//   });

//   return res;
// };

// Requirements:
// double -> square -> convert to string

// 2.using map and filter

Array.prototype.execute = function (...fns) {
  let arr = this;
  return arr.map((data) => {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, data);
  });
};

const result = numbers.execute(
  (num) => num * 2,
  (num) => num * num,
  (num) => `Value-${num}`,
);

console.log(result);

// ["Value-4", "Value-16", "Value-36", "Value-64"]
