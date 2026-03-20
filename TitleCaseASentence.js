// 7. Title Case a Sentence:
// Write a function that converts the first letter of each word in a sentence to uppercase.

const titleCase = (message) => {
  let parts = message.split(" ");
  parts = parts.filter((word) => word != "");
  let result = parts.map((word, index) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  result = result.join(" ");
  console.log(`titleCaseing Of given String "${message}" is: ${result}`);
};

titleCase("hello i am mantu morya");
