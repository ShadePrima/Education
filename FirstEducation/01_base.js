// // alert(1);
// // 1 Переменные  

// const para = document.querySelector("h1");
// para.addEventListener("click", updateName);

// function updateName() {
//     let name = prompt("Enter a new name");
//     para.textContent = name + " - человек";
// }
// // var name = "Aleks"
// // const lastName = "Aniskevich"
// // let age = 26 //namber
// // age = 37
// // const isProgrammer = true //boolean
// //camelCase
// // const firstName = "Aleksandr"
// // const if = "mkef" //err
// // const withNum5 = "5"
// // const 5withNum = "5" // err
// // console.log(age) 

// // 2 Мутирование

// // console.log('Имя человека: ' + firstName + ',а возраст человека:' + age)
// // alert('Имя человека: ' + firstName + ',а возраст человека:' + age) 
// // console.log(age.toString()) 
// // prompt('Введите фамилию')
// // const lastName = prompt('Введите фамилию')
// // alert(firstName + '' + lastName)

// // 3 Операторы
// // let currentYear = 2021
// // const birthYear = 1984

// // const age = currentYear + birthYear

// // const a = 10
// // const b = 5
// // let c = 32
// // // c = c + a
// // c += a

// // console.log(a+b)
// // console.log(a-b)
// // console.log(a * b)
// // console.log(a / b)
// // console.log(++currentYear)
// // console.log(--currentYear)
// // console.log(c)

// // 4 Типы данных
// // const isProgramer = true
// // const name = 'Aleksandr'
// // const age = 26
// // let x

// // console.log(typeof isProgramer)
// // console.log(typeof name)
// // console.log(typeof age)
// // console.log(x)
// // console.log(null)

// // 5 Приоритет операторов
// // const fullAge = 37
// // const birthYear = 1984
// // const currentYear = 2021

// // //> < >= <=

// // const isFullAge = currentYear - birthYear >= fullAge //37
// // console.log(isFullAge)

// //  6 Условные операторы
// // const courseStatus = 'faile' // ready, fail, pending

// // if (courseStatus === 'ready') {
// //     console.log('Курс уже готов и его можно проходить')
// // } else if (courseStatus === 'pending') {
// //     console.log('Курс пока находится в процессе')
// // } else {
// //     console.log('Курс не получился')
// // }

// // const isReady = false

// // if (isReady === true) {
// //     console.log('Все готово')
// // }
// // else {
// //     console.log('Все не готово')
// // }
// // 6 Тернарное выражение
// // isReady ? console.log('Все готово') : console.log('Все не готово')

// // const num1 = 42 //number
// // const num2 = '42'//string

// // console.log(num1 === num2)

// // 7 Булевая логика

// //  8 Функции

// // function calculateAge(year) {
// // return 2021 - year
// // }

// // const myAge = calculateAge(1984) // Можем использовать функцию без занесения в переменную
// // console.log(calculateAge(1984))
// // console.log(calculateAge(1989))
// // console.log(calculateAge(1996))

// // function logInfoAbout(name, year) {
// //     const age = calculateAge(year)

// //     if (age > 0) {
// //         console.log('Человек по имени ' + name  + ' сейчаса имеет возраст ' + age)
// //     } else {
// //         console.log('Этот человек еще не родился')
// //     }

// //     console.log()
// // }

// // logInfoAbout('Александр', 1984)
// // logInfoAbout('Ростислав', 1992)
// // logInfoAbout('Ростислав', 2023)

//  // 9 Массивы

// //  const cars = ['Мазда', 'Мерседес', 'Форд'] // В джава скрипт есть другой способ создавать массивы  
// // // const cars = new Array('Мазда', 'Мерседес', 'Форд') 
// // console.log(cars)
// // console.log(cars[1])
// // console.log(cars[0])
// // console.log(cars[2])
// // console.log(cars[3])
// // console.log(cars.length)

// // cars[0] = 'Porsche' // заменил значение по индексу 0
// // console.log(cars)
// // // cars[3] = 'Mazda' // расширил массив Добавил значение по индексу 3
// // cars[cars.length] = 'Mazda'
// // console.log(cars)

// // 10 Циклы

// // const cars = ['Мазда', 'Мерседес', 'Форд', 'Порш']

// // // for (let i = 0; i < cars.length; i++) {
// // //     const car = cars[i]
// // //     console.log(car)
// // // }
// //     for(let car of cars) { // новая форма цикла в джава скрипте  
// //         console.log(car)
// //     }

// // 11 Обьекты . В обект мы групируем определенные значения

// const person = {
//     firstName: 'Aleksandr',
//     lastName: 'Aniskevich',
//     year: 1984,
//     languages: ['Русский', 'Украинский', 'Английский', 'Немецкий'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet')
//     }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgramer = true
// console.log(person)
// person.greet()












