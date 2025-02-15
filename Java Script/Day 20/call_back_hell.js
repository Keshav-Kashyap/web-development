let h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {

    setTimeout(() => {
        h1.style.color = color;
    }, delay);

}

changeColor("Red", 1000, "blue");