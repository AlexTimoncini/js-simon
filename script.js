const daysDom = document.getElementById('days');
const hoursDom = document.getElementById('hours');
const minutesDom = document.getElementById('minutes');
const secondsDom = document.getElementById('seconds');
const nextLessonDate = new Date('May 26, 2023 09:30:00');

countdown(nextLessonDate, daysDom, hoursDom, minutesDom, secondsDom);

function countdown(finalDate, daysCounter, hoursCounter, minutesCounter, secondsCounter){

    const liveCountdown = setInterval(timeCalc, 1000, finalDate, daysCounter, hoursCounter, minutesCounter, secondsCounter);

    function timeCalc(finalDate, daysCounter, hoursCounter, minutesCounter, secondsCounter){
        const today = new Date(Date.now());
        const dateDifference = finalDate - today;
        const days = dateDifference / (3600000 * 24);
        const hours = (days - Math.floor(days)) * 24;
        const minutes = (hours - Math.floor(hours)) * 60;
        const seconds = (minutes - Math.floor(minutes)) * 60;    
        if (dateDifference <= 0){
            clearInterval(liveCountdown);
        } else {
            daysCounter.innerHTML = Math.floor(days);
            hoursCounter.innerHTML = Math.floor(hours);
            minutesCounter.innerHTML = Math.floor(minutes);
            secondsCounter.innerHTML = Math.floor(seconds);
        }
    }

}
