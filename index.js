// generate random number between 1 and 6
var randomNumberOne = (Math.floor(Math.random() * 6) + 1);

// set src of image file depending on random number generated

if (randomNumberOne === 1) {
    var whichImage = document.querySelector(".img1");
    whichImage.setAttribute("src", "./dice1.png");
}
else if (randomNumberOne === 2) {
    var whichImage = document.querySelector(".img1");
    whichImage.setAttribute("src", "./dice2.png");
}
else if (randomNumberOne === 3) {
    var whichImage = document.querySelector(".img1");
    whichImage.setAttribute("src", "./dice3.png");
}
else if (randomNumberOne === 4) {
    var whichImage = document.querySelector(".img1");
    whichImage.setAttribute("src", "./dice4.png");
}
else if (randomNumberOne === 5) {
    var whichImage = document.querySelector(".img1");
    whichImage.setAttribute("src", "./dice5.png");
}
else {
    var whichImage = document.querySelector(".img1");
    whichImage.setAttribute("src", "./dice6.png");
}

// generate random number for second dice
var randomNumberTwo = (Math.floor(Math.random() * 6) + 1);

// set src of image file depending on random number generated
if (randomNumberTwo === 1) {
    var whichImage = document.querySelector(".img2");
    whichImage.setAttribute("src", "./dice1.png");
}
else if (randomNumberTwo === 2) {
    var whichImage = document.querySelector(".img2");
    whichImage.setAttribute("src", "./dice2.png");
}
else if (randomNumberTwo === 3) {
    var whichImage = document.querySelector(".img2");
    whichImage.setAttribute("src", "./dice3.png");
}
else if (randomNumberTwo === 4) {
    var whichImage = document.querySelector(".img2");
    whichImage.setAttribute("src", "./dice4.png");
}
else if (randomNumberTwo === 5) {
    var whichImage = document.querySelector(".img2");
    whichImage.setAttribute("src", "./dice5.png");
}
else {
    var whichImage = document.querySelector(".img2");
    whichImage.setAttribute("src", "./dice6.png");
}
