/*
const obj = {
  name: "simform",
  fn: memoize(someFn),
};

// obj.fn();
*/

/*
const obj = {
  name: "simform",
  fn: memoize(someFn),
};

function someFn() {
  console.log(this.name);
}

function memoize(Fn) {
  return function () {
    Fn.call(this);
  };
}

obj.fn();
*/

/*
const obj = {
  name: "simform",
  fn: memoize(someFn),
  getName: () => {
    console.log("Mantu");
  },
};

function someFn() {
  console.log(this.name);
  this.getName();
}

function memoize(Fn) {
  return function () {
    Fn.call(this);
  };
}

obj.fn();
*/

/*

let name = "Ashish";

const obj = {
  name: "simform",
  fn: memoize(someFn),
  getName() {
    console.log(this.name);
  },
};

function someFn(value) {
  console.log(value);
  this.name = "Mantu";
  this.getName();
}

function memoize(Fn) {
  return function () {
    Fn.apply(this, [this.name]);
  };
}

obj.fn();

*/

let name = "Ashish";

const obj = {
  name: "simform",
  fn: memoize(someFn),
  getName: () => {
    console.log(name);
  },
};

function someFn(value) {
  console.log(value);
  obj.getName();
}

function memoize(Fn) {
  return function () {
    Fn.apply(this, [this.name]);
  };
}

obj.fn();
