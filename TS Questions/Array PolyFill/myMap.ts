let arr = [1, 2, 3, 4, 5];

interface Array<T> {
  myMap<U>(callback: (value: T, index: number, array: T[]) => U): U[];
}

Array.prototype.myMap = function <T>(
  cb: (value: T, index: number, array: T[]) => T,
) {
  let protoArr = this;
  let res = [];

  for (let i = 0; i < protoArr.length; i++) {
    res.push(cb(protoArr[i], i, protoArr));
  }

  return res;
};

let mapArr = arr.myMap((el) => {
  return el * 2;
});

console.log(mapArr);
