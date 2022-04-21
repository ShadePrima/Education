//Добавление прослушки на всем окне  
window.addEventListener('click', function(event) {
    const counterWrapper = event.target.closest('.counter-wrapper')
    const counter = counterWrapper.querySelector('[data-counter]')

    //проверяем является ли элмент по которому кликнули кнопкой плюс 
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText
    }
    
    //проверяем является ли элемент по которому кликнули кнопкой минус 
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
        }
    }
})   