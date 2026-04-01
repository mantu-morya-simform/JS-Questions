/*
LazyMan('Jack', console.log).eat('banana').sleep(10).eat('apple').sleep(1);
// Hi, I'm Jack.
// Eat banana.
// (after 10 seconds)
// Wake up after 10 seconds.
// Eat Apple.
// (after 1 second)
// Wake up after 1 second.
*/

/*

function LazyMan(name, opr) {
  if (name && opr === console.log) {
    console.log(`Hi, I'm ${name} `);
    return {
      eat: function (food) {
        console.log(`Eat ${food}`);
        return this;
      },
      sleep: function (time) {
        setTimeout(() => {
          console.log(`Wake up after ${time} Second`);
        }, time * 1000);
        return this;
      },
    };
  }
}

LazyMan("Mantu", console.log).eat("banana").sleep(2).eat("apple");

*/

/*
LazyMan('Jack', console.log).eat('banana').sleep(10).eat('apple').sleep(1);
// Hi, I'm Jack.
// Eat banana.
// (after 10 seconds)
// Wake up after 10 seconds.
// Eat Apple.
// (after 1 second)
// Wake up after 1 second.
*/

/*

function LazyMan(name, opr) {
  if (name && opr === console.log) {
    console.log(`Hi, I'm ${name} `);
    return {
      eat: function (food) {
        console.log(`Eat ${food}`);
        return this;
      },
      sleep: function (time) {
        let timePromise = () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log(`Wake up after ${time} Second`);
              resolve("true");
              return this;
            }, time * 1000);
          });
        };

        timePromise().then(() => {
          return this;
        });
      },
    };
  }
}

// LazyMan("Mantu", console.log).eat("banana").sleep(2);
LazyMan("Mantu", console.log).eat("banana").sleep(2).eat("apple");
*/
/*

function LazyMan(name, opr) {
  if (name && opr === console.log) {
    console.log(`Hi, I'm ${name} `);
    return {
      eat: function (food) {
        console.log(`Eat ${food}`);
        return this;
      },
      sleep: async function (time) {
        let timePromise = () => {
          return new Promise((resolve, rejece) => {
            setTimeout(() => {
              console.log(`Wake up after ${time} Second`);
              resolve("true");
            }, time * 1000);
          });
        };

        await timePromise();
        return this;
      },
    };
  }
}

// LazyMan("Mantu", console.log).eat("banana").sleep(2);
LazyMan("Mantu", console.log).eat("banana").sleep(2).eat("apple");


*/

/*
LazyMan('Jack', console.log).eat('banana').sleep(10).eat('apple').sleep(1);
// Hi, I'm Jack.
// Eat banana.
// (after 10 seconds)
// Wake up after 10 seconds.
// Eat Apple.
// (after 1 second)
// Wake up after 1 second.
*/

const LazyMan = (name, opr) => {
  const list = [];

  function nextOpration() {
    let opr = list.shift();
    if (opr) {
      opr();
    }
  }

  if (name && opr === console.log) {
    list.push((name) => {
      console.log(`Hi, I'm ${name} `);
      nextOpration();
    });
  }

  const Action = {
    eat(food) {
      list.push(() => {
        console.log(`Eat ${food}`);
        nextOpration();
      });
      return Action;
    },
    sleep(time) {
      list.push(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(`Wake up after ${time} Second`);
            resolve(true);
            nextOpration();
          }, time * 1000);
        });
      });
      return Action;
    },
  };
  setTimeout(nextOpration, 0);
  return Action;
};

LazyMan("Mantu", console.log).eat("Banana").sleep(2).eat("apple");
