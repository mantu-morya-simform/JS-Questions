let arr = [1, 2, 3, 4, 5];

interface Array<T> {
  myForEach(callback: (value: T, index: number, array: T[]) => void): void;
}

Array.prototype.myForEach = function <T>(
  cb: (value: T, index: number, array: T[]) => void,
) {
  let protoArr = this;

  for (let i = 0; i < protoArr.length; i++) {
    cb(protoArr[i], i, protoArr);
  }
};

arr.myForEach((el) => {
  console.log(el);
});
