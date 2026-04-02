const executeOnLongPress = (element, time, callback) => {
  let downTime = 0;

  element.addEventListener("mousedown", (e) => {
    downTime = e.timeStamp;
  });

  element.addEventListener("mouseup", (e) => {
    let upTime = e.timeStamp;
    let duration = (upTime - downTime) / 1000; //time in second

    if (duration >= time) {
      callback();
    }
  });
};

window.executeOnLongPress = executeOnLongPress;
