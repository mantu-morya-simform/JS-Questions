const memo = (func) => {
  let map = new Map();
  let result = 0;
  return (...args) => {
    let key = args.join("");
    if (map.has(key)) {
      console.log("From Cash");
      result = map.get(key);
    } else {
      console.log("Calculate new Result");
      result = func(...args);
      map.set(key, result);
    }
    return result;
  };
};
const func = (arg1, arg2) => {
  return arg1 + arg2;
};

const memoed = memo(func);

console.log(memoed(1, 2)); //Calculate new Result
console.log(memoed(1, 3)); //Calculate new Result
console.log(memoed(1, 4)); //Calculate new Result
console.log(memoed(1, 2)); //From Cash
console.log(memoed(1, 4)); //From Cash
