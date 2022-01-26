AFRAME.registerComponent('compressie', {
    schema: {
        type: 'string'
    },

    init: function() {

        const timer = ms => new Promise(res => setTimeout(res, ms));

        starter[0].onclick = async(event) => {
            if (stap == 1) {
                tweevingers.setAttribute("visible", true);
                playerHand.setAttribute("visible", false);
                await timer(3000);
                tweevingers.setAttribute("visible", false);
                stap++
            }
            if (stap == 2) {
                el = handen;
                el.setAttribute("visible", true);
                playerHand.setAttribute("visible", false);
                console.log("patient");
                await (start());
                playerHand.setAttribute("visible", true);
                el.setAttribute("visible", false)
                console.log(stap)
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
            } else {
                console.log("0")
                ele.setAttribute("color", "blue");
            }
        }
    }
});