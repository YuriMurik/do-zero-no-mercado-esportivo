import Countdown from "./countdown.js";

const tempoParaODozero = new Countdown("120000");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo,index)=>{
        tempo.innerHTML = tempoParaODozero.total[index];
    });
}

mostrarTempo ();
setInterval(mostrarTempo, 1000);

/*import Countdown from "./countdown.js";

const tempoParaODozero = new Countdown("13 August 2022 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo,index)=>{
        tempo.innerHTML = tempoParaODozero.total[index];
    });
}

mostrarTempo ();
setInterval(mostrarTempo, 1000);*/

/*function startTimer(duration,display) {
    var timer = duration, hours, minutes, seconds;

    setInterval(function(){

        hours = parseInt(timer /60 / 60 / 24, 10);
        minutes = parseInt(timer % 60 / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10? "0" + hours : hours;
        minutes = minutes < 10? "0" + minutes : minutes;
        seconds = seconds < 10? "0" + seconds : seconds;


        display.textContent = hours + ":" + minutes + ":" + seconds;

        if(--timer <0) {
            timer = duration;
        }
    },1000);
}

window.onload = function() {
    var duration = 1000 * 720;
    var display = document.querySelector(".timer");

    startTimer(duration,display);

}*/