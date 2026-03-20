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

// const calculator = (startVal = 0) => {
//   let val = startVal;

//   return {
//     add: function (num) {
//       val += num;
//       return this;
//     },
//     multiply: function (num) {
//       val *= num;
//       return this;
//     },
//     subtract: function (num) {
//       val -= num;
//       return this;
//     },
//     value: function () {
//       return val;
//     },
//   };
// };

// // console.log(calculator().add(5));
// console.log(calculator().add(5).multiply(2).subtract(3).value());

// Using Call(,,) Apply(,[]) bind(,,)

// const calculator = (startVal = 0) => {
//   let val = startVal;
//   return {
//     add: function (num) {
//       val += num;
//       return this;
//     },
//     multiply: function (num) {
//       val *= num;
//       return this;
//     },
//     subtract: function (num) {
//       val -= num;
//       return this;
//     },
//     value: function () {
//       return val;
//     },
//   };
// };

// // console.log(calculator().add(5));
// // console.log(calculator().add(5).multiply(2).subtract(3).value());
// let calc = calculator(10);
// calc.add.call(calc, 5); // same as calc.add(5)
// console.log(calc.value()); // 15
// calc.multiply.apply(calc, [2]);
// console.log(calc.value()); // 30
// let addFn = calc.add.bind(calc);
// addFn(10);
// console.log(calc.value()); // 40

// Using Arrow Function

const calculator = (startVal = 0) => {
  let val = startVal;
  let obj = {
    add: (num) => {
      val += num;
      return obj;
    },
    multiply: (num) => {
      val *= num;
      return obj;
    },
    subtract: (num) => {
      val -= num;
      return obj;
    },
    value: () => {
      return val;
    },
  };
  return obj;
};
// console.log(calculator().add(5).multiply(2).subtract(3).value());
