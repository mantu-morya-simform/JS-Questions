// 8. Find the Missing Number:
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

const findMiss = (arr) => {
  let length = arr.length;
  let total = (length * (length + 1)) / 2;
  let calcTotal = 0;
  arr.map((x) => {
    calcTotal += x;
  });

  let missingNumber = total - calcTotal;

  console.log(
    `The missing number In Given Array "[${arr}]" is: ${missingNumber}`,
  );
};

findMiss([0, 1, 2, 3, 4, 6, 7]);
