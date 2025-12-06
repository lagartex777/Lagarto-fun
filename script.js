// Jogo de clicker
let count = 0;
document.getElementById("click-btn").onclick = () => {
  count++;
  document.getElementById("click-count").innerText = count;
};

// Jogo de tempo de reação
let waiting = false;
let startTime = 0;

const reactionText = document.getElementById("reaction-text");
const reactionArea = document.getElementById("reaction-area");
const reactionResult = document.getElementById("reaction-result");

document.getElementById("start-reaction").onclick = () => {
  reactionText.innerText = "Espere ficar verde...";
  reactionArea.style.background = "#333";
  reactionResult.innerText = "--";
  waiting = true;

  const delay = Math.random() * 2000 + 1000;

  setTimeout(() => {
    if (!waiting) return;
    reactionArea.style.background = "#0f0";
    reactionText.innerText = "CLIQUE AGORA!";
    startTime = Date.now();
  }, delay);
};

reactionArea.onclick = () => {
  if (reactionArea.style.background === "rgb(0, 255, 0)") {
    const time = Date.now() - startTime;
    reactionResult.innerText = time;
    reactionText.innerText = "Bom!";
    waiting = false;
  }
};