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
    play[i].onclick = (event) => {
        play[i].setAttribute("color", "yellow");
        verder();
        setInterval(() => {
            window.location.replace("indexy.html")
        }, 5000);
    }
}

function verder() {
    for (let i = 0; i < play.length; i++) {
        play[i].setAttribute("visible", "false")
    }
    scherm.setAttribute("visible", "true")
    klik.setAttribute("raycaster", "far: 20; interval: 1000; objects: .picks, .places, .reset")
    bool = false;
    audioD.muted = true
}