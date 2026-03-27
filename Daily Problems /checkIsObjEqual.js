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

const isEqual = (a, b, weakMap = new WeakMap()) => {
  if (a === null || b === null) return a === b;
  if (a === b) return true;

  if (weakMap.has(a)) return weakMap.get(a) == b;
  weakMap.set(a, b);

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i], weakMap)) return false;
    }
    return true;
  }

  if (typeof a === "object" && typeof b === "object") {
    let keysA = Object.keys(a).sort();
    let keysB = Object.keys(b).sort();

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!keysB.includes(key)) return false;
    }

    for (let key of keysA) {
      if (!isEqual(a[key], b[key], weakMap)) return false;
    }
    return true;
  }

  return false;
};

const a = { a: "bfe" };
const b = { a: "bfe" };
console.log(isEqual(a, b));

const c = [1, a, "4"];
const d = [1, b, "4"];
console.log(isEqual(c, d));

const e = { a: "bfe", c: "kpe" };
const f = { a: "bfe", d: "kpe" };
console.log(isEqual(e, f));

const g = null;
const h = null;
console.log(isEqual(g, h));

const i = {};
i.self = i;

const j = {};
j.self = j;
console.log(isEqual(i, j));
