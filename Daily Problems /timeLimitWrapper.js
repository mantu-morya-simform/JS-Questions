/*
newFunction = timeLimit(myFunction, 200);
newFunction('will resolve?')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err); //Time limit Exceed
  });

*/

function timeLimit(func, t) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      func(...args)
        .then((result) => {
          clearTimeout(timer);
          resolve(result);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
}

const myFunction = (msg) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done: " + msg);
    }, 190);
  });
};

const newFunction = timeLimit(myFunction, 200);

newFunction("will resolve?").then(console.log).catch(console.error);
