let timerInterval;
let startTime;
let running = false;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = elapsedTime.getUTCHours().toString().padStart(2, '0');
    const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');
    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimer, 1000);
        running = true;
    }
});

stopButton.addEventListener('click', () => {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerDisplay.textContent = '00:00:00';
    running = false;
});
