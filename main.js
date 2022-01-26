let camera = document.getElementById("cursor")
let play = document.getElementsByClassName("play")
let world = document.getElementsByClassName("world")
let starter = document.getElementsByClassName("starter")
let patient = document.getElementById("patient")
let handen = document.getElementById("handjes")


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

starter[0].onclick = async(event) => {
    el = handen;
    el.setAttribute("visible", true);
    console.log("patient");
    await (start());
    el.setAttribute("visible", false);
}

const timer = ms => new Promise(res => setTimeout(res, ms));
async function start() {
    el = handen;
    ele = starter[0]
    let pause = false;
    for (let i = 0; i < 10; i++) {
        pause = true;
        await timer(300);
        patient.setAttribute("scale", { x: 1.01, y: 1.01, z: 1.01 });
        handen.setAttribute('position', { x: 1, y: -2.3, z: 1.5 });
        await timer(300);
        patient.setAttribute("scale", { x: 1, y: 1, z: 1 });
        handen.setAttribute('position', { x: 1, y: -2.4, z: 1.5 });
    }
    let worked = Math.floor(Math.random() * 3)
    if (worked == 1) {
        console.log("1")
        ele.setAttribute("color", "red");
    } else {
        console.log("0")
        ele.setAttribute("color", "blue");
    }
}