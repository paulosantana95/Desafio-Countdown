'user strict';

const secondsInMilliseconds = 1000;
const minutesInMilliseconds = secondsInMilliseconds * 60;
const hourInMilliseconds = minutesInMilliseconds * 60;
const dayInMilliseconds = hourInMilliseconds * 24;

const currentDate = new Date().getTime();
const lastDate = new Date('2022-03-03 23:59:59').getTime();


// function formatTime(time) {
//     return time < 10 ? `0${time}` : time;
// }


// function countdown(){
    
//         const dateDiff = lastDate - currentDate;
//         //days
//         const days = Math.floor(dateDiff /dayInMilliseconds);
//         //hours
//         const hours = Math.floor(dateDiff % dayInMilliseconds / hourInMilliseconds);
//         //minutes
//         const minutes = Math.floor(dateDiff % hourInMilliseconds / minutesInMilliseconds);
//         //seconds
//         const seconds = Math.floor(dateDiff % minutesInMilliseconds / secondsInMilliseconds);

//         const newDays = formatTime(days);
//         const newHours = formatTime(hours);
//         const newMinutes = formatTime(minutes);
//         const newSeconds = formatTime(seconds);

//         document.querySelector("h2").innerHTML = `${newDays} : ${newHours} : ${newMinutes} : ${newSeconds}`;
// }
// setTimeout(countdown, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

const currentTime = (time) => {
    const qtdSegundos = time % 60;
    const qtdMinutos = Math.floor((time % (60 * 60)) / 60);
    const qtdHoras = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(time / (60 * 60 * 24));

    document.querySelector("h2").innerHTML = `${formatTime(qtdDias)}  :  ${formatTime(qtdHoras)}  :  ${formatTime(qtdMinutos)}  :  ${formatTime(qtdSegundos)}`
}

const countdown = (time) => {
    const stopCount = () => clearInterval(timer)
    const count = () => {
        if(time == 0){
            stopCount();
        }
        currentTime(time);
        time--;

    }
    const timer = setInterval(count ,1000);
}

const timeLeft = () => {
    return Math.floor((lastDate - currentDate)/1000);
}

countdown(timeLeft());







