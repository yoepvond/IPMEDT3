let camera = document.getElementById("cursor")
let play= document.getElementsByClassName("play")
let world= document.getElementsByClassName("world")
let plays= document.getElementById("plays")

plays.onmouseenter = (event) => {
            console.log("hoi")
                plays.setAttribute("color", "blue");
}
plays.onmouseleave =(event)=>{
    plays.setAttribute("color", "grey");
}
plays.onclick=(event)=>{
    plays.setAttribute("color", "yellow");

}
var audioD = new Audio('soundsD/soundD.mp3');
for(let i = 0; i < play.length; i++){
    play[i].onmouseenter = (event) => {
        audioD.play();
        play[i].setAttribute("color", "blue");        
    }
    play[i].onmouseleave = (event) => {
        play[i].setAttribute("color", "grey");
    }
    play[i].onclick = (event) => {
        play[i].setAttribute("color", "yellow");
    }
}

// const timer = ms => new Promise(res => setTimeout(res, ms));
// async function start(){
//     for (let i = 0; i < 10; i++) {
//         await timer(1500);
//         body[0].setAttribute("scale",{x:0.1,y:0.1,z:0.1});
//         await timer(1500);
//         body[0].setAttribute("scale",{x:0.10,y:0.10,z:0.11});
//     }
// }
