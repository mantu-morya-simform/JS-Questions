/*
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

get(obj, 'a.b.c'); // [1,2,3]
get(obj, 'a.b.c.0'); // 1
get(obj, 'a.b.c[1]'); // 2
get(obj, ['a', 'b', 'c', '2']); // 3
get(obj, 'a.b.c[3]'); // undefined
get(obj, 'a.c', 'dev'); // 'dev'

*/

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

const getObjvalue = (obj, keys, defvalue) => {
  //if keys in string convert it into Arrays
  if (typeof keys === "string") {
    keys = keys.replaceAll("[", ".").replaceAll("]", "").split(".");
  }

  if (defvalue) {
    return defvalue;
  }

  let result = obj;
  for (let key of keys) {
    result = result[key];
  }
  return result;
};

console.log(getObjvalue(obj, "a.b")); // {c: [1,2,3]}
console.log(getObjvalue(obj, "a.b.c")); // [1,2,3]
console.log(getObjvalue(obj, "a.b.c.0")); // 1
console.log(getObjvalue(obj, ["a", "b"])); // {c: [1,2,3]}
console.log(getObjvalue(obj, ["a", "b", "c", "2"])); // 3
console.log(getObjvalue(obj, ["a", "b", "c", "5"])); // undefined
console.log(getObjvalue(obj, "a.b.c.d")); // undefined
console.log(getObjvalue(obj, ["a", "c"])); // undefined
console.log(getObjvalue(obj, ["a", "c"], "abc")); // abc
console.log(getObjvalue(obj, "a.b.c[1]")); // 2
console.log(getObjvalue(obj, "a.b.c[3]")); //undefined
console.log(getObjvalue(obj, "a.b[c]")); //[1,2,3]
console.log(getObjvalue(obj, "a.b[c][0]")); //1
