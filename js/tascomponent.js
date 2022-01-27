AFRAME.registerComponent('tas', {
    schema: {
        type: 'string'
    },

    init: function() {

        let object = document.getElementById("object");
        let vloer = document.getElementById("vloer");
        const text = document.getElementById("text");
        const plek = document.getElementById("place");
        const tas2 = document.getElementById("object2");
        let slachtoffer = document.getElementById("character")

        object.onclick = (event) => {
            object.setAttribute("spring", "target: #camera; damping: 100; stiffness: 100;");
            text.setAttribute("value", "Plaats de tas op de rode bal")
            plek.onclick = (event) => {
                console.log("check")
                object.setAttribute("visible", "false")
                console.log(object)
                tas2.setAttribute("visible", "true")
                text.setAttribute("value", "Start met de ademhaling controleren")

            }
        }

        vloer.onclick = (event) => {
            object.removeAttribute("spring")

        }
    }
});