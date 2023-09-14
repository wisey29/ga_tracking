// main.js

// Function to change the background color
function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ffff33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add an event listener to the button
const button = document.getElementById("color-button");
button.addEventListener("click", changeBackgroundColor);
