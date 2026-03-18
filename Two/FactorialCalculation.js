// 3. Factorial Calculation:
// Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

const findFact = (num) => {
  if (num == 1) {
    return 1;
  }

  return num * findFact(num - 1);
};

const getFact = (num) => {
  if (!num) {
    throw new Error("Please Provide a Number to find Factorial");
  }

  const fact = findFact(num);
  console.log(`factorial Of given number "${num}" is : ${fact}`);
};

const input = 5;
getFact(input);
