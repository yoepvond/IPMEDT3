let camera = document.getElementById("cursor")
let play= document.getElementsByClassName("play")
let world= document.getElementsByClassName("world")
let plays= document.getElementById("plays")
const scherm= document.getElementById("scherm")
const timer = ms => new Promise(res => setTimeout(res, ms));
const klik= document.getElementById("klik")
let bool= true;

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
if(bool){
    for(let i = 0; i < play.length; i++){
        console.log(play[i])
        play[i].onmouseenter = (event) => {
            audioD.play();
            play[i].setAttribute("color", "blue");        
        }
        play[i].onmouseleave = (event) => {
            play[i].setAttribute("color", "grey");
        }
        play[i].onclick = async(event) => {
            play[i].setAttribute("color", "yellow");
            verder();
        }
    }
}
 function verder(){
        for(let i = 0; i < play.length;i++){
            play[i].setAttribute("visible","false")
        }
        scherm.setAttribute("visible", "true")
        klik.setAttribute("raycaster","far: 20; interval: 1000; objects: .picks, .places, .reset")
        bool= false;
        audioD.muted= true
    }

