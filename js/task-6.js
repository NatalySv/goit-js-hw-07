function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = controls.querySelector('input');
const buttonCreate = controls.querySelector('button[data-create]');
const buttonDestroy = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', handleCreate);

function handleCreate(event) {
  const number = inputNumber.value;
  if (number < 1 || number > 100) {
    inputNumber.value = '';
    return;
  }
  boxes.innerHTML = '';
  createBoxes(number);
  inputNumber.value = '';
}

function createBoxes(amount) {
  let counter = 30;
  for (let i = 1; i <= amount; i++) {
    const color = getRandomHexColor();

    const box = document.createElement('div');
    box.style.width = `${counter}px`;
    box.style.height = `${counter}px`;
    box.style.backgroundColor = color;
    boxes.append(box);
    counter += 10;
  }
}

buttonDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  boxes.innerHTML = '';
}
