const button = document.querySelector<HTMLButtonElement>(".fetch__button");
const delay = 300;
function fetchApi() {
  console.log(`Fetch Api Data...`);
}

function throttle(fetchApi: () => void, delay: number) {
  let flag: boolean = true;
  return function () {
    if (flag) {
      flag = false;
      setTimeout(() => {
        fetchApi();
        flag = true;
      }, delay);
    }
  };
}

const betterThrottle = throttle(fetchApi, delay);
button?.addEventListener("click", betterThrottle);
