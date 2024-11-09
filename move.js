document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { console.clear() }, 600);
    electronMovement("h-atom", "h-electron");
    electronMovement("o-atom", "o-electron");
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
        setInterval(toggleAnimation, 2000);
    });

    marker.addEventListener("markerLost", () => {
        console.log("Marker Lost");
    })
}