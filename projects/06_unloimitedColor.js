//random color generate
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let bgChanger;
const startChangingColor = function () {
  const changeBgColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!bgChanger) {
    bgChanger = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(bgChanger);
  bgChanger = null;
};

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
