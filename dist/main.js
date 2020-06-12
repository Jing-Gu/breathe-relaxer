const container = document.querySelector(".container");
const text = document.getElementById("text");

const totalTime = 7500; //7.5s
const breatheTime = (totalTime / 5) * 2; //3s
const holdTime = totalTime / 5; //1.5s

const breatheIn = () => {
  text.textContent = "Breathe In!";
  container.className = "container grow";
  setTimeout(hold, breatheTime);
};

const hold = () => {
  text.textContent = "Hold";
  setTimeout(breatheOut, holdTime);
};

const breatheOut = () => {
  text.textContent = "Breathe Out!";
  container.className = "container shrink";
};

const breatheAnimation = () => {
  breatheIn();
};

document.addEventListener("DOMContentLoaded", breatheAnimation);
setInterval(breatheAnimation, totalTime);
