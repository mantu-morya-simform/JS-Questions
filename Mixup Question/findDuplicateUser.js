// 2. Find duplicate users by username

const users = [
  { id: 1, username: "mantu" },
  { id: 2, username: "aman" },
  { id: 3, username: "mantu" },
  { id: 4, username: "rohit" },
  { id: 5, username: "aman" },
];

function findDuplicates(arr, key) {
  let set = new Set();
  let res = [];
  arr.forEach((element) => {
    if (set.has(element.username)) {
      res.push(element);
    }
    set.add(element.username);
  });

  return res;
}

console.log(findDuplicates(users, "username"));
