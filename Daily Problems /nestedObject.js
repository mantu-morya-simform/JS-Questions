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

//1. Using Itterative

// const obj = {
//   a: {
//     b: {
//       c: [1, 2, 3],
//     },
//   },
// };

// const getObjvalue = (obj, keys, defvalue) => {
//   //if keys in string convert it into Arrays
//   if (typeof keys === "string") {
//     keys = keys.replaceAll("[", ".").replaceAll("]", "").split(".");
//   }

//   let result = obj;
//   for (let key of keys) {
//     result = result[key];
//   }

//   return result === undefined ? defvalue : result;
// };

// console.log(getObjvalue(obj, "a.b")); // {c: [1,2,3]}
// console.log(getObjvalue(obj, "a.b.c")); // [1,2,3]
// console.log(getObjvalue(obj, "a.b.c.0")); // 1
// console.log(getObjvalue(obj, ["a", "b"])); // {c: [1,2,3]}
// console.log(getObjvalue(obj, ["a", "b", "c", "2"])); // 3
// console.log(getObjvalue(obj, ["a", "b", "c", "5"])); // undefined
// console.log(getObjvalue(obj, "a.b.c.d")); // undefined
// console.log(getObjvalue(obj, ["a", "c"])); // undefined
// console.log(getObjvalue(obj, ["a", "c"], "abc")); // abc
// console.log(getObjvalue(obj, "a.b.c[1]")); // 2
// console.log(getObjvalue(obj, "a.b.c[3]")); //undefined
// console.log(getObjvalue(obj, "a.b[c]")); //[1,2,3]
// console.log(getObjvalue(obj, "a.b[c][0]")); //1

// //2. Using Recursive

// const getObjvalueRecursive = (obj, keys, defvalue) => {
//   //if keys in string convert it into Arrays
//   if (typeof keys === "string") {
//     keys = keys.replaceAll("[", ".").replaceAll("]", "").split(".");
//   }

//   if (!obj && defvalue) return defvalue;

//   if (keys.length == 0) return obj;

//   return getObjvalueRecursive(obj[keys[0]], keys.slice(1), defvalue);
// };

// console.log(getObjvalueRecursive(obj, "a.b")); // {c: [1,2,3]}
// console.log(getObjvalueRecursive(obj, "a.b.c")); // [1,2,3]
// console.log(getObjvalueRecursive(obj, "a.b.c.0")); // 1
// console.log(getObjvalueRecursive(obj, ["a", "b"])); // {c: [1,2,3]}
// console.log(getObjvalueRecursive(obj, ["a", "b", "c", "2"])); // 3
// console.log(getObjvalueRecursive(obj, ["a", "b", "c", "5"])); // undefined
// console.log(getObjvalueRecursive(obj, "a.b.c.d")); // undefined
// console.log(getObjvalueRecursive(obj, ["a", "c"])); // undefined
// console.log(getObjvalueRecursive(obj, ["a", "c"], "abc")); // abc
// console.log(getObjvalueRecursive(obj, "a.b.c[1]")); // 2
// console.log(getObjvalueRecursive(obj, "a.b.c[3]")); //undefined
// console.log(getObjvalueRecursive(obj, "a.b[c]")); //[1,2,3]
// console.log(getObjvalueRecursive(obj, "a.b[c][0]")); //1

//setting the value

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

//1. Using Itteration

const setObjvalue = (obj, keys, value) => {
  //if keys in string convert it into Arrays
  if (typeof keys === "string") {
    keys = keys.replaceAll("[", ".").replaceAll("]", "").split(".");
  }

  let result = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    let key = keys[i];
    if (result[key] === undefined) {
      //deside array or object
      result[key] = isNaN(keys[i + 1]) ? {} : [];
    }
    result = result[key];
  }

  result[keys[keys.length - 1]] = value;
};

// setObjvalue(obj, "a.name", "Mantu");
setObjvalue(obj, "a.x.y", 5);
console.log(obj.a);

//2. Using Recursion

const setObjvalueRecursive = (curr, keys, value) => {
  //if keys in string convert it into Arrays
  if (typeof keys === "string") {
    keys = keys.replaceAll("[", ".").replaceAll("]", "").split(".");
  }

  const key = keys[0];

  if (keys.length === 1) {
    curr[key] = value;
    return;
  }

  if (curr[key] === undefined) {
    //["a","k","s"]  b->next->(c)->NaN->{}       //inside obj-> inside a -> inside k(undefined) -> k next -> s That is NaN -> insert value after creating object
    //["a","b","5"]  b->next->(c)->Number->[]    //inside obj-> inside a -> inside b -> inside [] Array value at 5th index -> insert value after creating array
    //deside array or object
    curr[key] = isNaN(keys[1]) ? {} : [];
  }
  setObjvalueRecursive(curr[key], keys.slice(1), value);

  return curr;
};

setObjvalueRecursive(obj, "a.x.y", 5);
console.log(obj);
setObjvalueRecursive(obj, "a.name", "Mantu");
console.log(obj);
setObjvalueRecursive(obj, "a.b.c[5]", "Mantu");
console.log(obj.a.b.c);
