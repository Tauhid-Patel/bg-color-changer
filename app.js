//setting up selectors
const btn = document.querySelector('#change-color');
const body = document.querySelector('body');

//random colors needed for the project
const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'teal', 'orange', 'gold', 'biege', 'black'];

//adding the event listener that will change the background
btn.addEventListener('click', changeBackground);

//Logic needed to change the background
function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}