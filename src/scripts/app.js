const divWrapper = document.querySelector('.wrapper');

function changeButtons(event) {
  const divCountClick = document.querySelector('.count');
  const buttons = document.querySelectorAll('button');
  const currentClickElement = event.target;

  if (currentClickElement.type === 'button') {
    divCountClick.innerText = Number(divCountClick.innerText) + 1;
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].innerText = 'Нажми меня';
    }
    currentClickElement.innerText = 'Нажато';
  }
}

divWrapper.addEventListener('click', (event) => changeButtons(event));
