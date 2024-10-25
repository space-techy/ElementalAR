document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { console.clear() }, 600);
    const marker = document.getElementById("main-marker");
    const electron = document.getElementById("electron");
    let direction = 0;

    const toggleAnimation = () => {
        if (direction == 2) {
            electron.attributes.animation.value = "property: position;from: 0 1 0;to: -1 0 0;dur: 2000;easing: linear;loop: true;"
        } else if (direction == 3) {
            electron.attributes.animation.value = "property: position;from: -1 0 0;to: 0 -1 0;dur: 2000;easing: linear;loop: true;"
        } else if (direction == 4) {
            electron.attributes.animation.value = "property: position;from: 0 -1 0;to: 1 0 0;dur: 2000;easing: linear;loop: true;"
            direction = 0;
        }
        direction += 1;
    }



    marker.addEventListener("markerFound", () => {
        console.log("Hello world!!");
        console.log(electron.attributes.animation);
        setInterval(toggleAnimation, 1900);
    });

    marker.addEventListener("markerLost", () => {
        console.log("Marker Lost");
    })
});