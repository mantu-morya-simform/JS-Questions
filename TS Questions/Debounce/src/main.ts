const inputText = document.querySelector<HTMLInputElement>(".text__input");

function fetchApi(data: string) {
  console.log(data);
}

function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: number;

  return function (this: unknown, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}

const betterDebounce = debounce(fetchApi, 300);

inputText?.addEventListener("keyup", (e) => {
  const target = e.currentTarget as HTMLInputElement;
  betterDebounce(target.value);
});
