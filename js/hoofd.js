const object = document.getElementById("object");
const vloer = document.getElementById("vloer");
const hoofd = document.getElementById("hoofd")
const text = document.getElementById("text");
const plek = document.getElementById("place");
const tas2 = document.getElementById("object2");
let timer = document.getElementById("timer");




//hoofdpijn
var timeLeft = 360
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId)
        console.log("dood");
    } else if (timeLeft == 300) {
        hoofd.setAttribute("color", "grey")
        timeLeft--;
    } else if (timeLeft == 240) {

        hoofd.setAttribute("opacity", "0.2")
        timeLeft--;
    } else if (timeLeft == 180) {

        hoofd.setAttribute("color", "pink")

        timeLeft--;
    } else if (timeLeft == 120) {

        hoofd.setAttribute("color", "orchid")
        timeLeft--;
    } else if (timeLeft == 60) {

        hoofd.setAttribute("color", "blue")
        timeLeft--;
    } else {
        timer.setAttribute("value", timeLeft)
        timeLeft--;
    }
}