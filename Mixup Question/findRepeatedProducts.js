// 4. Find repeated product names

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Laptop" },
  { id: 4, name: "Watch" },
];

function getDuplicates(arr, key) {
  return arr.filter((element) => element.name === key);
}

console.log(getDuplicates(products, "Laptop"));
