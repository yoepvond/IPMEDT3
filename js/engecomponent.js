AFRAME.registerComponent('compressie', {
    schema: {
        type: 'string'
    },

    init: function() {

        const timer = ms => new Promise(res => setTimeout(res, ms));
        let starter = document.getElementsByClassName("starter");
        let shocker = document.getElementsByClassName("aed");
        let drukker = document.getElementsByClassName("drukken");
        let ademhaling = document.getElementsByClassName("ademhaling");
        let info = document.getElementById("startText");
        let adem = document.getElementById("adem");
        const text = document.getElementById("text");
        let audio = new Audio("soundsD/heartbeat.mp3");

        starter[0].onclick = async(event) => {
            audio.play();
            audio.volume = 0.3;
            if (stap == 1) {
                text.setAttribute("value", "")
                info.setAttribute("Value", "Check ademhaling")
                tweevingers.setAttribute("visible", true);
                playerHand.setAttribute("visible", false);
                await timer(3000);
                tweevingers.setAttribute("visible", false);
                playerHand.setAttribute("visible", true);
                stap++
                shocker[0].setAttribute("visible", true);
                info.setAttribute("Value", "Probeer de AED");
            }
        }
        shocker[0].onclick = async(event) => {
            if (stap == 2) {
                aed.setAttribute("visible", true);
                console.log("patient");
                await (shock());
                console.log(stap)
                let worked = Math.floor(Math.random() * 3);
                if (worked == 0) {
                    console.log("ja")
                    starter[0].setAttribute("color", "green");
                    shocker[0].setAttribute("visible", false);
                    aed.setAttribute("visible", false);
                    drukker[0].setAttribute("visible", true);
                    stap++
                    info.setAttribute("Value", "Nu Borstcompressie");
                } else {
                    console.log("nee");
                    starter[0].setAttribute("color", "red");
                }
            }
        }
        drukker[0].onclick = async(event) => {
            if (stap == 3) {
                el = handen;
                el.setAttribute("visible", true);
                playerHand.setAttribute("visible", false);
                console.log("patient");
                await (start());
                playerHand.setAttribute("visible", true);
                el.setAttribute("visible", false)
                console.log(stap)
                let worked = Math.floor(Math.random() * 3)
                if (worked == 0) {
                    console.log("ja")
                    starter[0].setAttribute("color", "green");
                    ademhaling[0].setAttribute("visible", true);
                    drukker[0].setAttribute("visible", false);
                    info.setAttribute("Value", "Probeer beademing");
                    stap++

                } else {
                    console.log("nee")
                    starter[0].setAttribute("color", "red");

                }
            }
        }
        ademhaling[0].onclick = async(event) => {
            if (stap == 4) {
                adem.setAttribute("visible", true);
                console.log("patient");
                await (shock());
                console.log(stap)
                let worked = Math.floor(Math.random() * 1)
                if (worked == 0) {
                    console.log("ja")
                    starter[0].setAttribute("color", "green");
                    ademhaling[0].setAttribute("visible", false);
                    info.setAttribute("Value", "GELUKT!");
                    stap++
                    audio.play();
                    audio.volume = 0.3;
                    setInterval(() => {
                        window.location.replace("indexy.html")
                    }, 5000);
                }

            } else {
                console.log("nee")
                starter[0].setAttribute("color", "red");
                ademhaling[0].setAttribute("visible", false);
                drukker[0].setAttribute("visible", true);
                stap--
            }
        }


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
        }
        async function shock() {
            await timer(1000);
            patient.setAttribute("scale", { x: 1.01, y: 1.01, z: 1.01 });
            await timer(300);
            patient.setAttribute("scale", { x: 1, y: 1, z: 1 });
            await timer(1000);

        }
    }
});