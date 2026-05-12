// 6. Group users by dynamic key

const users = [
  { id: 1, city: "Delhi" },
  { id: 2, city: "Mumbai" },
  { id: 3, city: "Delhi" },
];

Array.prototype.groupBy = function (key) {
  return this.reduce((acc, user) => {
    if (!acc[user[key]]) {
      acc[user[key]] = [];
    }
    acc[user[key]].push(user);
    return acc;
  }, {});
};

console.log(users.groupBy("city"));
