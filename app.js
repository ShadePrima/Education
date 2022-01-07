// var shopingDone = false

const { lines } = require("prelude-ls")

// if (shopingDone === true) {
//     var childsAllowance = 10
// } else {
//     var childsAllowance = 5
// }

var select = document.querySelector('select')
var para = document.querySelector('p')

select.addEventListener('change', setWeather)

function setWeather () {
    var choice = select.value

    if (choice === 'sunny') {
        para.textContent = 'Сегодня хорошо и солнечно. Носите шорты. Идите на пляж или в парк и купите мороженное. '
    } else if (choice === 'rainy') {
        para.textContent = 'Дождь идет за окном; возьмите плащь и зонт и не находитесь слишком долго на улице'
    } else if (choice === 'snowing') {
        para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашком горячего шоколада или слепить снеговика'
    } else if (choice === 'overcast') {
        para.textContent = 'Дождя нет, но небо серое и мрачное; но все может измениься в любую минуту, поэтому на всякий случай возьмите с собой зонт'
    } else {
        para.textContent = ''
    }
}

//Как было:
function greet()
{
 console.log('Hello');
}
var greet1 = function(){
 console.log('hello');
}
//ES6:
var greet2 = () => {
 console.log('hello');
}

// Нижеуказанная функция является конструктором обьекта принимающая параметры и присваевающая их к свойствам обьекта 
function person (name, age) {
    this.name = name;
    this.age = age;
}
var Jone = new person('John', 25)
var James = new person('James', 21)

document.write(Jone.age)
document.write(James.age)

methodName = function() {
    code lines
}

function bornYear() {
    return 2016 - this.age;
}

objectName.methodName()