// const event1 = document.getElementById("a");
// event1.addEventListener("click", function(event) {
//     console.log(event.target);
// });



// const keydown = document.getElementById("b");
// keydown.addEventListener("keydown", function(event) {
//     console.log(event.key);
// });

// const mouse = document.getElementById("c");
// mouse.addEventListener("mouseover", function(event) {
//     event.target.style.backgroundColor = "red";
//     console.log(event.target);
//     console.log("mouse over");
// });

// const text = document.getElementById("ab");
// const count = document.getElementById("count");
// text.addEventListener("input", () => {
//     count.textContent = text.value.length;
// });

// const button = document.getElementById("colorButton");
// button.addEventListener("click", () => {
//     const colors = ["red","blue", "green", "yellow", "orange", "purple"];
//     document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// });

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// parent.addEventListener("click", function() {
//     console.log("Parent clicked");
// });

// child.addEventListener("click", function() {
//     console.log("Child clicked");
// });

const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");
const yellowButton = document.getElementById("yellowButton");
const purpleButton = document.getElementById("purpleButton");
const resetButtont = document.getElementById("resetButton");

redButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

blueButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

greenButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

yellowButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
});

purpleButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "purple";
});

resetButtont.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
});