document.addEventListener('DOMContentLoaded', () => {
    const newDate = new Date('May 31 2023 00:00:00').getTime()
    
    const daysVal = document.querySelector('.time-count__item__days .time-count__val-days')
    const hoursVal = document.querySelector('.time-count__item__hours .time-count__val-hours')
    const minutesVal = document.querySelector('.time-count__item__minutes .time-count__val-minutes')
    const secondsVal = document.querySelector('.time-count__item__seconds .time-count__val-seconds')

    const timeCount = () => {
        let now = new Date();
        let leftUntil = newDate - now;
        
        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;
    }
    timeCount();

    setInterval(timeCount, 1000)
});