import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

// const flatpickr = require("flatpickr");

const elements = {
    input : document.querySelector('#datetime-picker'),
    btnStart : document.querySelector('button[data-start]'),
    time : document.querySelector('.timer'),
    days : document.querySelector('span[data-days]'),
    hours : document.querySelector('span[data-hours]'),
    minutes : document.querySelector('span[data-minutes]'),
    seconds : document.querySelector('span[data-seconds]'),
}

let timerId;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const currentDate = new Date();
        if (selectedDate <= currentDate) {
            Notiflix.Notify.warning("Please choose a date in the future");
            return;
        } else {
            if (timerId) {
                // clearInterval(timerId);
                elements.btnStart.disabled = true; 
            } else {
                elements.btnStart.disabled = false; 
                timerId = setInterval(() => {
                    const currentTime = new Date();
                    const ms = selectedDate.getTime() - currentTime.getTime();
                    if (ms <= 0) {
                        clearInterval(timerId); 
                        elements.btnStart.disabled = true; 
                        return;
                    }
                    updateTimer(ms);
                }, 1000);
            }
        }
    }
};

const picker = flatpickr("#datetime-picker", options);

function updateTimer(ms) {
    const { days, hours, minutes, seconds } = convertMs(ms);
    elements.days.textContent = addLeadingZero(days);
    elements.hours.textContent = addLeadingZero(hours);
    elements.minutes.textContent = addLeadingZero(minutes);
    elements.seconds.textContent = addLeadingZero(seconds);
}
function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}
  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  



