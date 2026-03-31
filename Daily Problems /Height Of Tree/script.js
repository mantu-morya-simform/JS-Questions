const findHeight = (bodyElement) => {
  if (!bodyElement || bodyElement.children.length == 0) {
    return 1;
  }

  let maxHeight = 0;
  for (let child of bodyElement.children) {
    let childHeight = findHeight(child);
    maxHeight = childHeight > maxHeight ? childHeight : maxHeight;
  }

  return 1 + maxHeight;
};

const bodyElement = document.querySelector("body");
console.log(findHeight(bodyElement));
