// 9. Caesar Cipher:
// Implement a function that takes a string and a shift value and returns a new string where each letter is shifted by the provided amount.

const caesarCipher = (str, sv) => {
  let shiftedStr = "";
  for (ch of str) {
    currentCharCode = ch.charCodeAt(0);
    nextCharCode = currentCharCode + sv;
    //upperCase
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      shiftedStr += String.fromCharCode(nextCharCode);
      //lowerCase
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      shiftedStr += String.fromCharCode(nextCharCode);
    } else {
      shiftedStr += ch;
    }
  }
  console.log(`Shifted given String "${str}" by ${sv} is: ${shiftedStr}`);
};
caesarCipher("abA", 3);
