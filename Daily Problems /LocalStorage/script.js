const myLocalStorage = {
  customSetItem(key, value, expiryTime) {
    let data = { tokenID: value.tokenID, expiry: Date.now() + expiryTime };
    localStorage.setItem(key, JSON.stringify(data));
  },
  customGetItem() {
    data = JSON.parse(localStorage.getItem("token"));
    if (Date.now() > data.expiry) {
      localStorage.removeItem("token");
    }
    data = localStorage.getItem("token");
    console.log(data);
  },
};

//store Data into Local Storage
myLocalStorage.customSetItem("token", { tokenID: "154752254545454abc" }, 1000);

//acess token before 1 sec
myLocalStorage.customGetItem();

//acess token After 1 sec
setTimeout(() => {
  myLocalStorage.customGetItem();
}, 1100);
