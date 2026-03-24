const myLocalStorage = {
  prefix: "local_",
  customSetItem(key, value, expiryTime) {
    let data = { tokenID: value.tokenID, expiry: Date.now() + expiryTime };
    localStorage.setItem(this.prefix + key, JSON.stringify(data));
  },
  customGetItem(token) {
    data = JSON.parse(localStorage.getItem(this.prefix + token));
    if (Date.now() > data.expiry) {
      localStorage.removeItem(this.prefix + token);
    }
    data = localStorage.getItem(this.prefix + token);
    return data;
  },
};

//store Data into Local Storage
myLocalStorage.customSetItem("token", { tokenID: "154752254545454abc" }, 1000);

//acess token before 1 sec
console.log(myLocalStorage.customGetItem("token"));

//acess token After 1 sec
setTimeout(() => {
  console.log(myLocalStorage.customGetItem("token"));
}, 1100);
