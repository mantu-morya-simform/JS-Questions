const data = {
  name: "Mantu",
  age: 10,
  city: "ahmd",
};

// before enumerable: false
// console.log(Object.getOwnPropertyDescriptors(data));
const a = { ...data };
console.log(a, data);

// after enumerable: false
Object.defineProperty(data, "name", {
  enumerable: false,
});
// console.log(console.log(Object.getOwnPropertyDescriptors(data)));
const b = { ...data };
console.log(b, data);
