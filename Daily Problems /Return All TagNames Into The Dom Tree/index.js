/*
Given a DOM tree, please return all the tag names it has.
*/

const findTagNames = (node, arr = []) => {
  arr.push(node.tagName);
  for (let childNode of node.children) {
    findTagNames(childNode, arr);
  }

  return arr;
};

let bodyElement = document.body;

console.log(findTagNames(bodyElement));

/*
Your function should return a unique array of tags names in lowercase, order doesn't matter.
*/

const findUniqueTagNames = (node, set = new Set()) => {
  set.add(node.tagName.toLowerCase());
  for (let childNode of node.children) {
    findUniqueTagNames(childNode, set);
  }

  return set;
};

console.log(findUniqueTagNames(bodyElement));
