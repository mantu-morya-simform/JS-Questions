// 5. Array Chunking:
// Write a function that takes an array and a chunk size as arguments and splits the array into chunks of the specified size.

const arrayChunking = (arr, chunkSize) => {
  let chunkedArr = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArr.push(arr.slice(i, i + chunkSize));
  }
  console.log(chunkedArr);
};

const arr = [1, 2, 3, 4, 5, 6, 7];
chunkSize = 2;

arrayChunking(arr, chunkSize);
