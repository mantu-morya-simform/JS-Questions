// Write a function that generates the nth number in the Fibonacci sequence. The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

//1. first Approch
const fibonacciIttrative = (n) => {
  let arr = [];
  arr.push(1);
  arr.push(1);
  for (let i = 3; i <= n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  arr.map((x) => {
    console.log(x);
  });
};

const n = 10;

console.log(`The "${n}" fibonacci sequence is : ${fibonacciRecursive(10)}`);
fibonacciIttrative(10);

// Second Approch
const fibonacciRecursive = (n) => {
  if (n == 1 || n == 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(`The "${n}" fibonacci number is : ${fibonacciRecursive(10)}`);
