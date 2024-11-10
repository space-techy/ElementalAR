document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { console.clear() }, 600);
    electronMovement("h-atom", "h-electron");
    electronMovement2("o-atom", "o-electron", "o-electron2");

    checkMarkerProximity("h-atom", "o-atom");
});

function electronMovement(atomName, electronName) {
    const marker = document.getElementById(atomName);
    const electron = document.getElementById(electronName);
    let direction = 2;

    const toggleAnimation = () => {
        if (direction === 1) {
            electron.attributes.animation.value = "property: position;from:1 0 0;to: 0 1 0;dur: 2000;easing: linear;loop: true;";
        } else if (direction === 2) {
            electron.attributes.animation.value = "property: position;from: 0 1 0;to: -1 0 0;dur: 2000;easing: linear;loop: true;";
        } else if (direction === 3) {
            electron.attributes.animation.value = "property: position;from: -1 0 0;to: 0 -1 0;dur: 2000;easing: linear;loop: true;";
        } else if (direction === 4) {
            electron.attributes.animation.value = "property: position;from: 0 -1 0;to: 1 0 0;dur: 2000;easing: linear;loop: true;";
            direction = 1;
            return;
        }
        direction += 1;
    };

    marker.addEventListener("markerFound", () => {
        setInterval(toggleAnimation, 1900);
    });
}

function electronMovement2(atomName, electronName, electronName2) {
    const marker = document.getElementById(atomName);
    const electron = document.getElementById(electronName);
    const electron2 = document.getElementById(electronName2);
    let direction = 2;

    const toggleAnimation = () => {
        if (direction === 1) {
            electron.attributes.animation.value = "property: position;from:1 0 0;to: 0 1 0;dur: 2000;easing: linear;loop: true;";
            electron2.attributes.animation.value = "property: position;from:1 0 1;to: 0 1 0;dur: 2000;easing: linear;loop: true;";
        } else if (direction === 2) {
            electron.attributes.animation.value = "property: position;from: 0 1 0;to: -1 0 0;dur: 2000;easing: linear;loop: true;";
            electron2.attributes.animation.value = "property: position;from: 0 1 0;to: -1 0 -1;dur: 2000;easing: linear;loop: true;";
        } else if (direction === 3) {
            electron.attributes.animation.value = "property: position;from: -1 0 0;to: 0 -1 0;dur: 2000;easing: linear;loop: true;";
            electron2.attributes.animation.value = "property: position;from: -1 0 -1;to: 0 -1 0;dur: 2000;easing: linear;loop: true;";
        } else if (direction === 4) {
            electron.attributes.animation.value = "property: position;from: 0 -1 0;to: 1 0 0;dur: 2000;easing: linear;loop: true;";
            electron2.attributes.animation.value = "property: position;from: 0 -1 0;to: 1 0 1;dur: 2000;easing: linear;loop: true;";
            direction = 1;
            return;
        }
        direction += 1;
    };

    marker.addEventListener("markerFound", () => {
        setInterval(toggleAnimation, 1900);
    });
}

// New function to check proximity between two markers and replace their inner HTML
function checkMarkerProximity(marker1Id, marker2Id) {
    const marker1 = document.getElementById(marker1Id);
    const marker2 = document.getElementById(marker2Id);

    function getDistance() {
        const pos1 = marker1.object3D.position;
        const pos2 = marker2.object3D.position;
        return pos1.distanceTo(pos2);
    }

    function proximityHandler() {
        if (marker1.object3D.visible && marker2.object3D.visible) {
            const distance = getDistance();
            if (distance < 2) {
                // Replace inner HTML of marker1 with H2O model
                marker1.innerHTML = `
                    <a-entity gltf-model="/public/models/nuc3/nuc3.gltf" position="0 0 0" scale="12 12 12" rotation="0 90 90"></a-entity>
                `;
                // Clear the inner HTML of marker2 to remove electrons
                marker2.innerHTML = "";

                // Position the H2O model between the two markers
                const midPosition = marker1.object3D.position.clone().lerp(marker2.object3D.position, 0.5);
                marker1.object3D.position.copy(midPosition);
                marker1.setAttribute("scale", "0.025 0.025 0.025");

            } else {
                // Reset both markers to show original atoms if they move apart
                marker1.innerHTML = `
                    <a-entity id="h-nuc" gltf-model="/public/models/nuc.gltf" position="0 0 0" scale="15 15 15" rotation="0 90 90"></a-entity>
                    <a-entity id="h-electron" gltf-model="/public/models/electron.gltf" position="0.75 0 0" scale="10 10 10" animation="property: position;from:1 0 0;to: 0 1 0;dur: 2000;easing: linear;loop: true;"></a-entity>
                `;
                marker2.innerHTML = `
                    <a-entity id="o-nuc" gltf-model="/public/models/nuc2/nuc2.gltf" position="0 0 0" scale="10 10 10" rotation="0 0 90"></a-entity>
                    <a-entity id="o-electron" gltf-model="/public/models/electron.gltf" position="0.75 0 0" scale="10 10 10" animation="property: position;from:1 0 0;to: 0 1 0;dur: 2000;easing: linear;loop: true;"></a-entity>
                    <a-entity id="o-electron2" gltf-model="/public/models/electron.gltf" position="0.75 0 0" scale="10 10 10" animation="property: position;from:1 0 1;to: 0 1 0;dur: 2000;easing: linear;loop: true;"></a-entity>
                `;
            }
        }
    }

    setInterval(proximityHandler, 200);
}
