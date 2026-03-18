// 1. Reverse a String:
// Write a function that reverses a given string. For example, if the input is "hello," the output should be "olleh."

const revString = (str) => {
  let arrString = str.split("");
  let i = 0;
  let j = arrString.length - 1;
  while (i <= j) {
    let temp = arrString[i];
    arrString[i] = arrString[j];
    arrString[j] = temp;
    i++;
    j--;
  }
  let revStr = arrString.join("");
  console.log(`Reverse of the given String "${str}" is : ${revStr}`);
};

revString("hello");
