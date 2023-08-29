const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  let timerId = null;

function onBtnStartClick() {
   
    btnStart.disabled = true;
    btnStop.disabled = false;
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onBtnStopClick() {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(timerId);
}



// const ref = {
//     body: document.querySelector('body'),
//     btnStart: document.querySelector('button[data-start'),
//     btnStop: document.querySelector('button[data-stop]')
// }

// const CHANGE_COLOR_DELAY = 1000;
// let idInterval = null;


// ref.btnStop.disabled = true;
// ref.btnStart.addEventListener('click', handlerStartChangeColor);
// ref.btnStop.addEventListener('click', handlerStopChangeColor)

// function handlerStartChangeColor() {
//     ref.btnStart.disabled = true;
//     ref.btnStop.disabled = false;

//     idInterval = setInterval(() => {
//         ref.body.style.backgroundColor = getRandomHexColor();
//     }, CHANGE_COLOR_DELAY);
// }



// function handlerStopChangeColor() {
//     ref.btnStart.disabled = false;
//     ref.btnStop.disabled = true;

//     clearInterval(idInterval);
// }


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }