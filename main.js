let camera = document.getElementById("cursor")
let play = document.getElementsByClassName("play")
let world = document.getElementsByClassName("world")
let starter = document.getElementsByClassName("starter")
let patient = document.getElementById("patient")
let handen = document.getElementById("handjes")
const playerHand = document.getElementById("handD")
const tweevingers = document.getElementById("2vinger")

let stap = 1;

var audioD = new Audio('soundsD/soundD.mp3');
for (let i = 0; i < play.length; i++) {
    play[i].onmouseenter = (event) => {
        audioD.play();
        play[i].setAttribute("color", "blue");
    }
    play[i].onmouseleave = (event) => {
        play[i].setAttribute("color", "grey");
    }
}