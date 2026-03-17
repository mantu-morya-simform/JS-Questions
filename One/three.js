//3. Question: convert decimals to binary
// in:  14
// out: 1110

const desimalToBinary = (decimalInput) => {
  let binaryAnsArr = [];

  while (decimalInput !== 0) {
    let rem = decimalInput % 2;
    decimalInput = Math.floor(decimalInput / 2);
    binaryAnsArr.push(rem);
  }
  let ans = binaryAnsArr.reverse().join("");
  console.log(`Binary of Given Decimal : ${ans}`);
};

let decimalInput = 14;
desimalToBinary(decimalInput);
