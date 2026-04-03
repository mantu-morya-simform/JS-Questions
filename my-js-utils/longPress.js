const executeOnLongPress = (element, time, callback) => {
  let timer = null;
  let isPrassed = false;

  const startPress = () => {
    isPrassed = true;
    timer = setTimeout(() => {
      if (isPrassed) callback();
    }, time * 1000);
  };

  const stopPress = () => {
    isPrassed = false;
    clearTimeout(timer);
  };

  // Pointer down = start
  element.addEventListener("pointerdown", startPress);

  // Pointer up anywhere on page = stop
  window.addEventListener("pointerup", stopPress);

  // If user moves pointer off element → stop
  element.addEventListener("pointerleave", stopPress);
};

export default { executeOnLongPress };
