// Function to move an element to a random position on the screen
function moveRandomEl(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";  // Random top position between 5% and 95%
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // Random left position between 5% and 95%
}

// Selecting the "NO" button element
const moveRandom = document.querySelector("#move-random");

// Adding event listener to move the element when it's clicked
moveRandom.addEventListener("click", function(e){
    moveRandomEl(e.target);
});
