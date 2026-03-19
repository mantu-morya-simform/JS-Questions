// Anagram Detection:
// Write a function that checks if two words are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another.

const checkAnagram = (word1, word2) => {
  if (word1.length != word2.length) {
    console.log(
      `Given Words "${word1}" And "${word2}" Are not Anagram Of each`,
    );
    return;
  }

  let arr = new Array();

  for (let char of word1) {
    arr.push(char);
  }

  for (let char of word2) {
    if (!arr.includes(char)) {
      console.log(
        `Given Words "${word1}" And "${word2}" Are not Anagram Of each`,
      );
      return;
    } else {
      arr.splice(arr.indexOf(char), 1);
    }
  }

  console.log(`Given Words "${word1}" And "${word2}" Are Anagram Of each`);
};

const word1 = "abbc";
const word2 = "aabc";

checkAnagram(word1, word2);
