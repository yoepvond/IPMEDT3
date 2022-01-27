AFRAME.registerComponent('compressie', {
    schema: {
        type: 'string'
    },

    init: function() {

        const timer = ms => new Promise(res => setTimeout(res, ms));
        let starter = document.getElementsByClassName("starter")
        let shocker = document.getElementsByClassName("aed")
        let drukker = document.getElementsByClassName("drukken")
        let info = document.getElementById("startText")
        let adem = document.getElementById("adem")

        starter[0].onclick = async(event) => {
            if (stap == 1) {
                info.setAttribute("Value", "Check ademhaling")
                tweevingers.setAttribute("visible", true);
                playerHand.setAttribute("visible", false);
                await timer(3000);
                tweevingers.setAttribute("visible", false);
                playerHand.setAttribute("visible", true);
                stap++
                shocker[0].setAttribute("visible", true);
            }
        }
        shocker[0].onclick = async(event) => {
            if (stap == 2) {
                aed.setAttribute("visible", true);
                console.log("patient");
                await (shock());
                aed.setAttribute("visible", false)
                console.log(stap)
                stap++
                drukker[0].setAttribute("visible", true);
                shocker[0].setAttribute("visible", false);
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
                let worked = Math.floor(Math.random() * 1)
                if (worked == 0) {
                    console.log("0")
                        .setAttribute("color", "red");
                    drukker[0].setAttribute("visible", false)
                } else {
                    console.log("1")
                    drukker[0].setAttribute("visible", true);
                    ele.setAttribute("color", "blue");

                }
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
            let worked = Math.floor(Math.random() * 3)
            if (worked == 1) {
                console.log("1")
                ele.setAttribute("color", "red");
                drukker[0].setAttribute("visible", false)
            } else {
                console.log("0")
                drukker[0].setAttribute("visible", true);
                ele.setAttribute("color", "blue");

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