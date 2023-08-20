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

elements.btnStart.disabled = true;
let timerId;
const picker = flatpickr("#datetime-picker", options);
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
        (selectedDate > currentDate) 
            elements.btnStart.disabled = false;
            elements.btnStart.addEventListener('click', () =>{
               const timerId = setInterval(() => {
                const currenTime = new Date ();
                const ms = selecteddates[0].getTime() - currentTime.getTime();
                elements.days.textContent = addLeadingZero(convertMs(ms).days);
                elements.hours.textContent = addLeadingZero(convertMs(ms).hours);
                elements.minutes.textContent = addLeadingZero(convertMs(ms).minutes);
                elements.seconds.textContent = addLeadingZero(convertMs(ms).seconds);
               }, 1000);
            });
        }
       },
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
  



