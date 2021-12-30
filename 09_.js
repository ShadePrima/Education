const para = document.querySelector('p') 

para.addEventListener('click', updateName)

function updateName() {
    let name = prompt('Enter a new name')
    para.textContent = 'Pleyer 1: ' + name
}

// Функция: создает новый параграф и добавляет его вниз тела HTML.
function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll('button');
  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }

  const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
}