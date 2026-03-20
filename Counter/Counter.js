const createCounter = () => {
  let count = 0;
  return function () {
    console.log(++count);
  };
};

const counter = createCounter();
counter();
counter();
counter();

const anotherCounter = createCounter();
anotherCounter();
