//Находим элементы для взаимодействия 
const buttonMinus = document.querySelector('[data-action="minus"]')
const buttonPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')


//Отслеживаем клин на кнопку мину и уменьшаем счетчик
buttonMinus.addEventListener( 'click', function() {
    
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText
    }
})

//Отслеживаем клин на кнопку плюс и увеличиваем счетчик
buttonPlus.addEventListener('click', function() {
    counter.innerText = ++counter.innerText
}) 
 