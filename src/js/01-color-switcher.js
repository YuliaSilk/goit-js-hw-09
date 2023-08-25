const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function onBtnStartClick() {
   
    btnStart.disabled = true;
    btnStop.disabled = false;
    let timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onBtnStopClick() {
    btnStop.disabled = true;
    btnStart.disabled = false;
    let clearInterval(timerId);
}
