const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer();
  startButton.disabled = false;
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedHours = padZero(hours);
  const formattedMinutes = padZero(minutes);
  const formattedSeconds = padZero(seconds);

  timerDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padZero(value) {
  return value.toString().padStart(2, "0");
}

// Назначаем обработчики событий кнопкам
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
