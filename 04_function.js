// 1 Функции
//Function Declaration

// function greet(name) {
//     console.log('Привет - ', name)
// }

// // Function Expression
// const greet2 = function greet2(name) {
// console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
//  const interval = setInterval(function() {
//      if (counter === 5) {
//          clearInterval(interval) //clearTimeout
//      } else {
//         console.log(++counter)
//      }    
//  }, 1000)

// 3 Стрелочные функции

function greet(name) {
    // console.log('Привет - ', name)
}

const arrow = (name, age) => {
    // console.log('Привет - ', name)
}
const arrow2 = name => console.log('Привет - ', name)

arrow('Aleksandr')
arrow2('Aleksandr')

const pow2 = num => {
    return num ** 2
}

// console.log(pow2(5))

// Параметры по умолчанию

const sum = (a = 42, b = 1) => a + b

console.log(sum(41))

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// Замыкание

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName =  createMember('Aleksandr')
console.log(logWithLastName('Aniskevich'))