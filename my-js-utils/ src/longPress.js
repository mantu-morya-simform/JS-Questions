const executeOnLongPress = (id) => {
  let btnElement = document.querySelector(`#${id}`);

  let downTime = 0;

  btnElement.addEventListener("mousedown", (e) => {
    downTime = e.timeStamp;
    console.log(`Mouse Down At:, ${new Date(downTime).toLocaleString()}`);
  });

  btnElement.addEventListener("mouseup", (e) => {
    let upTime = e.timeStamp;
    console.log(`Mouse Up At:, ${new Date(upTime).toLocaleString()}`);

    let duration = (upTime - downTime) / 1000; //time in second

    if (duration > 3) {
      alert(`Held For: ${duration.toFixed(2)} seconds`);
    }
  });
};
