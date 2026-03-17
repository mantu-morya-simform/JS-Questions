// 2. Question: convert binary to decimal
// in: 0111
// out: 7

const findDecimal = (input) => {
  let arr = input.split("").map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[i] = Math.pow(2, arr.length - (i + 1));
    }
  }
  const decimalOpt = arr.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log(`Decimal of Given Binary : ${decimalOpt}`);
};

let input = "0111";
findDecimal(input);
