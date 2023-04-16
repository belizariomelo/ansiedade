let gameStarted = false;
let breathing = "";
let score = 0;
let timer;

const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const breathingCircle = document.getElementById("breathing-circle");
const breathingText = document.getElementById("breathing-text");
const scoreDisplay = document.getElementById("score");

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);

function startGame() {
  gameStarted = true;
  startButton.classList.add("hide");
  breathingCircle.style.opacity = "1";
  breathingText.style.opacity = "1";
  nextBreath();
}

function resetGame() {
  gameStarted = false;
  breathing = "";
  score = 0;
  scoreDisplay.innerHTML = score;
  breathingCircle.style.opacity = "0";
  breathingText.style.opacity = "0";
  clearTimeout(timer);
  startButton.classList.remove("hide");
}

function nextBreath() {
  if (!gameStarted) {
    return;
  }
  if (breathing === "") {
    breathing = "Inspire";
    breathingCircle.style.borderColor = "#4CAF50";
  } else if (breathing === "Inspire") {
    breathing = "Segure";
    breathingCircle.style.borderColor = "#FF9800";
  } else if (breathing === "Segure") {
    breathing = "Expire";
    breathingCircle.style.borderColor = "#F44336";
  } else if (breathing === "Expire") {
    breathing = "Inspire";
    breathingCircle.style.borderColor = "#4CAF50";
    score++;
    scoreDisplay.innerHTML = score;
  }
  breathingText.innerHTML = breathing;
  timer = setTimeout(nextBreath, getBreathingTime());
}

function getBreathingTime() {
  if (breathing === "Inspire") {
    return 6000;
  } else if (breathing === "Segure") {
    return 6000;
  } else if (breathing === "Expire") {
    return 6000;
  }
}
