const inputText = document.querySelector<HTMLInputElement>(".text__input");
const delay = 300;
function fetchApi(data) {
  console.log(`Fetch Api With data: ${data}`);
}

let timer: number;
function debounce(fetchApi: (data: string) => void, delay: number) {
  return function (e: KeyboardEvent) {
    if (!(e.currentTarget instanceof HTMLInputElement)) return;
    let value = e.currentTarget.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fetchApi(value);
    }, delay);
  };
}

const betterDebounce = debounce(fetchApi, delay);

inputText?.addEventListener("keyup", betterDebounce);
