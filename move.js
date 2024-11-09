document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { console.clear() }, 600);
    electronMovement("h-atom", "h-electron");
    electronMovement2("o-atom", "o-electron", "o-electron2");

    checkMarkerProximity("h-atom", "o-atom", "h2o-model");
});


function electronMovement(atomName, electronName) {
    const marker = document.getElementById(atomName);
    const electron = document.getElementById(electronName);
    let direction = 2;

    const toggleAnimation = () => {
        if (direction == 1) {
            electron.attributes.animation.value = "property: position;from:1 0 0;to: 0 1 0;dur: 2000;easing: linear;loop: true;";
        } else if (direction == 2) {
            electron.attributes.animation.value = "property: position;from: 0 1 0;to: -1 0 0;dur: 2000;easing: linear;loop: true;"
        } else if (direction == 3) {
            electron.attributes.animation.value = "property: position;from: -1 0 0;to: 0 -1 0;dur: 2000;easing: linear;loop: true;"
        } else if (direction == 4) {
            electron.attributes.animation.value = "property: position;from: 0 -1 0;to: 1 0 0;dur: 2000;easing: linear;loop: true;"
            direction = 1;
            return;
        }
        direction += 1;
        return;
    }



    marker.addEventListener("markerFound", () => {
        console.log("Hello world!!");
        console.log(electron.attributes.animation);
        setInterval(toggleAnimation, 1900);
    });

    marker.addEventListener("markerLost", () => {
        console.log("Marker Lost");
    })
}

function electronMovement2(atomName, electronName, electronName2) {
    const marker = document.getElementById(atomName);
    const electron = document.getElementById(electronName);
    const electron2 = document.getElementById(electronName2);
    let direction = 2;

    const toggleAnimation = () => {
        if (direction == 1) {
            electron.attributes.animation.value = "property: position;from:1 0 0;to: 0 1 0;dur: 2000;easing: linear;loop: true;";
            electron2.attributes.animation.value = "property: position;from:1 0 1;to: 0 1 0;dur: 2000;easing: linear;loop: true;";
        } else if (direction == 2) {
            electron.attributes.animation.value = "property: position;from: 0 1 0;to: -1 0 0;dur: 2000;easing: linear;loop: true;";
            electron2.attributes.animation.value = "property: position;from: 0 1 0;to: -1 0 -1;dur: 2000;easing: linear;loop: true;"
        } else if (direction == 3) {
            electron.attributes.animation.value = "property: position;from: -1 0 0;to: 0 -1 0;dur: 2000;easing: linear;loop: true;";
            electron2.attributes.animation.value = "property: position;from: -1 0 -1;to: 0 -1 0;dur: 2000;easing: linear;loop: true;";
        } else if (direction == 4) {
            electron.attributes.animation.value = "property: position;from: 0 -1 0;to: 1 0 0;dur: 2000;easing: linear;loop: true;";
            electron2.attributes.animation.value = "property: position;from: 0 -1 0;to: 1 0 1;dur: 2000;easing: linear;loop: true;";
            direction = 1;
            return;
        }
        direction += 1;
        return;
    }



    marker.addEventListener("markerFound", () => {
        console.log("Hello world!!");
        console.log(electron.attributes.animation);
        setInterval(toggleAnimation, 1900);
    });

    marker.addEventListener("markerLost", () => {
        console.log("Marker Lost");
    })
}

// New function to check proximity between two markers
function checkMarkerProximity(marker1Id, marker2Id, h2oModelId) {
    const marker1 = document.getElementById(marker1Id);
    const marker2 = document.getElementById(marker2Id);
    const h2oModel = document.getElementById(h2oModelId);

    function getDistance() {
        const pos1 = marker1.object3D.position;
        const pos2 = marker2.object3D.position;
        return pos1.distanceTo(pos2);
    }

    function proximityHandler() {
        if (marker1.object3D.visible && marker2.object3D.visible) {
            const distance = getDistance();
            if (distance < 2) { // Adjust threshold as necessary
                marker1.setAttribute("visible", "false");
                marker2.setAttribute("visible", "false");
                h2oModel.setAttribute("visible", "true");
                h2oModel.object3D.position.lerpVectors(marker1.object3D.position, marker2.object3D.position, 0.5);
                h2oModel.setAttribute("scale", "0.025 0.025 0.025");

            } else {
                marker1.setAttribute("visible", "true");
                marker2.setAttribute("visible", "true");
                h2oModel.setAttribute("visible", "false");
                h2oModel.setAttribute("position", "0 0 -5");
            }
        }
    }

    // Check proximity every 200ms
    setInterval(proximityHandler, 200);
}