const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');
const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');

stopButton.addEventListener('click', () => {
    stopLight.style.background="red"
    slowLight.style.background=""
    goLight.style.background=""

});

slowButton.addEventListener('click', () => {
    stopLight.style.background=""
    slowLight.style.background="yellow"
    goLight.style.background=""

});

goButton.addEventListener('click', () => {
    stopLight.style.background=""
    slowLight.style.background=""
    goLight.style.background="green"

});
v