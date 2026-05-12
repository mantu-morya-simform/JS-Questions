const button = document.querySelector<HTMLButtonElement>(".fetch__button");
function fetchApi() {
  console.log(`Fetch Api Data...`);
}

function throttle<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let flag: boolean = true;
  return function (this: unknown, ...args: any[]) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        fn.call(this, ...args);
        flag = true;
      }, delay);
    }
  };
}

const betterThrottle = throttle(fetchApi, 500);
button?.addEventListener("click", betterThrottle);
