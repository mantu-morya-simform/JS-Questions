//1. Question: sum two numbers given in the string
// ex. "3456" +"6789" = "10245"

console.log("");
console.log("Question-1 Start");

const sumString = (num1, num2) => {
  return String(Number(num1) + Number(num2));
};

const num1 = "3456";
const num2 = "6789";
const sum = sumString(num1, num2);
// console.log(typeof sum);
// console.log(sum.length);
console.log(sum);

console.log("Question-1 End");
console.log("");

// 2. Question: convert binary to decimal
// in: 0111
// out: 7

console.log("Question-2 Start");

const findDecimal = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[i] = Math.pow(2, arr.length - (i + 1));
    }
  }
  return arr.reduce((acc, curr) => {
    return acc + curr;
  });
};

let input = "0111";
let arr = input.split("").map(Number);
const decimalOpt = findDecimal(arr);
console.log(`Decimal of Given Binary : ${decimalOpt}`);
console.log("Question-2 End");
console.log("");

//3. Question: convert decimals to binary
// in:  14
// out: 1110

console.log("Question-3 Start");

const desimalToBinary = (binaryInput) => {
  let binaryAnsArr = [];

  while (binaryInput !== 0) {
    let rem = binaryInput % 2;
    binaryInput = Math.floor(binaryInput / 2);
    binaryAnsArr.push(rem);
  }
  let ans = binaryAnsArr.reverse().join("");
  return ans;
};

let binaryInput = 14;

console.log(`Binary of Given Decimal : ${desimalToBinary(binaryInput)}`);

console.log("Question-3 End");
console.log("");
