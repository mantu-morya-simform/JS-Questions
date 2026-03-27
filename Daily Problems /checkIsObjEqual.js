/*
// const a = { a: 'bfe' };
// const b = { a: 'bfe' };

// isEqual(a, b); // true
// a === b; // false

// const c = [1, a, '4'];
// const d = [1, b, '4'];

// isEqual(c, d); // true
// c === d; // false

// isEqual(a, b); // true
// a === b; // false
*/

const isEqual = (a, b) => {
  if (a === b) return true;

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) return false;
    }
    return true;
  }

  if (typeof a === "object" && typeof b === "object") {
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!isEqual(a[key], b[key])) return false;
    }
    return true;
  }

  return false;
};

const a = { a: "bfe" };
const b = { a: "bfe" };

const c = [1, a, "4"];
const d = [1, b, "4"];

console.log(isEqual(a, b));
console.log(isEqual(c, d));
