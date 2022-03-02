const lastTime = new Date('2022-03-10 23:59:59');

//No zero left correction
const leftZeros = function(number) {
    return String(number).padStart(2, '0')
}
// countdown function
function updateCountDownTime () {
    const currentTime = new Date();
    const diff = lastTime - currentTime;

    if(diff <= 0) {
        clearInterval();
    } else {
        
        const days = Math.floor(diff/ 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff/ 1000 / 60 / 60) % 24;
        const minutes = Math.floor(diff/ 1000 / 60) % 60;
        const seconds = Math.floor(diff/ 1000) % 60;
        
        document.querySelector("h2").innerHTML = `${leftZeros(days)}  :  ${leftZeros(hours)}  :  ${leftZeros(minutes)}  :  
        ${leftZeros(seconds)}`;
    
        console.log(days, hours, minutes, seconds);
    }
    
}

setInterval(updateCountDownTime, 1000);




//OLD CODE!
// function formatTime(time) {
//     return time < 10 ? `0${time}` : time;
// }

// const currentTime = (time) => {
//     const qtdSegundos = time % 60;
//     const qtdMinutos = Math.floor((time % (60 * 60)) / 60);
//     const qtdHoras = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
//     const qtdDias = Math.floor(time / (60 * 60 * 24));

//     document.querySelector("h2").innerHTML = `${formatTime(qtdDias)}  :  ${formatTime(qtdHoras)}  :  ${formatTime(qtdMinutos)}  :  ${formatTime(qtdSegundos)}`
// }

// const countdown = (time) => {
//     const stopCount = () => clearInterval(timer)
//     const count = () => {
//         if(time == 0){
//             stopCount();
//         }
//         currentTime(time);
//         time--;

//     }
//     const timer = setInterval(count ,1000);
// }

// const timeLeft = () => {
//     return Math.floor((lastDate - currentDate)/1000);
// }

// countdown(timeLeft())