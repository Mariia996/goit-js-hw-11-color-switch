const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onBtnRandomColor);

function onBtnRandomColor() {

    const intervalColorsId = setInterval(() => {
        const randomNumber = randomIntegerFromInterval(0, colors.length);
        document.body.style.backgroundColor = colors[randomNumber];
    }, 1000);
    startBtn.disabled = true;

    stopBtn.addEventListener('click', function () {
        clearInterval(intervalColorsId);
        startBtn.disabled = false;
    });
}






