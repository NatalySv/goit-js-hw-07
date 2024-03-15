function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const spanColor = body.querySelector('.color');
const buttonColor = body.querySelector('.change-color');

buttonColor.addEventListener('click', handleChangeColor);

function handleChangeColor(event) {
  spanColor.textContent = getRandomHexColor();
  body.style.backgroundColor = spanColor.textContent;
}
