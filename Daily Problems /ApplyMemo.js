const memo = (func) => {
  let map = new Map();
  let result = 0;
  return (...args) => {
    // console.log(args);
    // console.log(func.name);
    console.log(map.has(args));
    if (map.has(args)) {
      console.log("From Cash");
      result = map.get(args);
    } else {
      console.log("Calculate new Result");
      result = func(...args);
      map.set(args, result);
    }
    return result;
  };
};
const func = (arg1, arg2) => {
  return arg1 + arg2;
};

const memoed = memo(func);

console.log(memoed(1, 2));
console.log(memoed(1, 2));
