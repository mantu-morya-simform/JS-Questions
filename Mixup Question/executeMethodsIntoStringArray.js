// 3. Create execute method for string formatting

const cities = ["  ahmedabad", "MUMBAI  ", " deLHi "];

Array.prototype.execute = function (...fns) {
  return this.map((data) => {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, data);
  });
};

const result = cities.execute(
  (city) => city.trim(),
  (city) => city.toLowerCase(),
  (city) => city.charAt(0).toUpperCase() + city.slice(1),
);

console.log(result);

// ["Ahmedabad", "Mumbai", "Delhi"]
