var randomNumber = Math.floor(Math.random() * 100) +1; // Присваивается случайное число от 1 до 100

// Сделаны для хранения ссылок на абзацы 
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

//Хранят ссылки на форму ввода текста и кнопку отправки а позднее используются для управления подачи догадки 
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField'); //Запоминает значение из поля ввода 

// Сохраняют колличество догадок и ссылку на кнопку сброса 
var guessCount = 1;
var resetButton;
guessField.focus(); //Помещает курсо в строку для ввода чиста сразу после загрузки страницы 


function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
     }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

// Добавляем обработчик событий к кнопке guessSubmit
guessSubmit.addEventListener('click', checkGuess); //Добавляем обработчик событий 


function setGameOver() {
    //Отключают ввод текста и кнопку формы
    guessField.disabled = true;
    guessSubmit.disabled = true;
    // Генерируют новый элемент Button
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    // Устанавливает обработчик событий на нашей новой кнопке 
    resetButton.addEventListener('click', resetGame);
}


// нужно определить функцию resetGame
function resetGame() {
    guessCount = 1; //Устанавливает значение на 1

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton); //Удаляет кнопку сброса из нашего файла 
    //Удаляет все пункты информации
    guessField.disable = false;
    guessSubmit.disable = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white'; // Удаляет цвет фона из абзаца lastResulte

    randomNumber = Math.floor(Math.random() * 100) +1; // Создает новое случайное число 
} 
//Код выше сбрасывает все на то? как это было в начале игры , поэтому у игрока может быть еще один ход 
