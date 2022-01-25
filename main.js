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
}

