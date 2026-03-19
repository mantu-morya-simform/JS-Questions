// const calculator = (startVal = 0) => {
//   return {
//     val: startVal,
//     add: function (num) {
//       this.val += num;
//       return this;
//     },
//     multiply: function (num) {
//       this.val *= num;
//       return this;
//     },
//     subtract: function (num) {
//       this.val -= num;
//       return this;
//     },
//     value: function () {
//       return this.val;
//     },
//   };
// };

// console.log(calculator().add(5).multiply(10).subtract(10).value());

const calculator = (startVal = 0) => {
  let val = startVal;

  return {
    add: function (num) {
      val += num;
      return this;
    },
    multiply: function (num) {
      val *= num;
      return this;
    },
    subtract: function (num) {
      val -= num;
      return this;
    },
    value: function () {
      return val;
    },
  };
};

// console.log(calculator().add(5));
console.log(calculator().add(5).multiply(2).subtract(3).value());
