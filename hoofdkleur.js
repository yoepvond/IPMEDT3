const object = document.getElementById("object");
const vloer = document.getElementById("vloer");
const hoofd = document.getElementById("hoofd")


//hoofdpijn
/*var timeLeft = 360
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId)
        console.log("dood");
    } else if (timeLeft == 300) {
        console.log("kaas");
        hoofd.setAttribute("color", "grey")
        timeLeft--;
    } else if (timeLeft == 240) {
        console.log("kaas");
        hoofd.setAttribute("opacity", "0.2")
        timeLeft--;
    } else if (timeLeft == 180) {
        console.log("kaas");
        hoofd.setAttribute("color", "pink")

        timeLeft--;
    } else if (timeLeft == 120) {
        console.log("kaas");
        hoofd.setAttribute("color", "orchid")
        timeLeft--;
    } else if (timeLeft == 60) {
        console.log("kaas");
        hoofd.setAttribute("color", "blue")
        timeLeft--;
    } else {
        console.log(timeLeft);
        timeLeft--;
    }
}*/


//oppakken blokje
object.onclick = (event) => {
    object.setAttribute("spring", "target: #camera; damping: 50; stiffness: 100;");
}

vloer.onclick = (event) => {
    object.removeAttribute("spring")

}