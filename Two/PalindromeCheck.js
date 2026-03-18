// 2. Palindrome Check:
// Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward.

const checkPalindrome = (str) => {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};

const passStr = (str) => {
  if (!str) {
    console.log("Kindly Provide Some Text to Check Palindrome!");
  }

  const result = checkPalindrome(str);

  if (result) {
    console.log(`Given String "${str}" is Palindrome`);
  } else {
    console.log(`Given String "${str}" is Not Palindrome`);
  }
};

const str = "racecar";
passStr(str);
