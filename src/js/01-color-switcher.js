function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.start.addEventListener('click', onChangeColor);
refs.stop.addEventListener('click', onRemoveColor);

function onChangeColor() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    } ,1000);
    
    refs.start.setAttribute('disabled', 'disabled');
};

function onRemoveColor() {
    clearInterval(timerId);
    refs.start.removeAttribute('disabled');
};