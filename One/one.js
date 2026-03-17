//1. Question: sum two numbers given in the string
// ex. "3456" +"6789" = "10245"

const sumString = (num1, num2) => {
  let largeString = num1.length > num2.length ? num1 : num2;
  let arrStr = largeString.split("");
  let carry = 0;
  let curr = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  let k = arrStr.length - 1;

  while (i >= 0 || j >= 0) {
    let digitOne = Number(num1[i--]);
    let digitTwo = Number(num2[j--]);
    if (!digitTwo) {
      digitTwo = 0;
    }
    if (!digitOne) {
      digitOne = 0;
    }
    // console.log(digitOne, digitTwo);
    let sum = digitOne + digitTwo + carry;
    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      curr = sum % 10;
    } else {
      carry = 0;
      curr = sum % 10;
    }
    arrStr[k--] = String(curr);
  }
  if (carry > 0) {
    arrStr.unshift(carry);
  }
  let finalSum = arrStr.join("");
  console.log(`Sum Of Given String is : ${finalSum} `);
};

const num1 = "3456";
const num2 = "6789";
sumString(num1, num2);
