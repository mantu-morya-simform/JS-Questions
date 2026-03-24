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

const get = (obj, opr, defvalue) => {
  if (typeof opr == "string") {
    let keys = opr.replaceAll("[", ".").replaceAll("]", "").split(".");
    console.log(keys);
    // console.log(keys);
    // let result = obj;
    // for (let key of keys) {
    //   result = result[key];
    // }
    // console.log(result);
  } else if (Array.isArray(opr)) {
    let keys = ".".concat(opr.join("."));
    console.log(keys);
  }
};

get(obj, ["a", "b", "c", "5"]);
