// Массивы

const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//     {name: 'Aleksandr', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// console.log(cars)
// console.log(fib)

//function
// function addItemToEnd() {

// }

//Method
// cars.push('Рено')
// cars.unshift('Волга')
// console.log(cars)

// const firstCar = cars.shift()
// const lastCar = cars.pop()

// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)


// console.log(cars)
// cars[index] = 'Porsche'
// console.log(cars[index]) 
// const index = cars.indexOf('БМВ')



// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })

// let findedPerson
// for (const person of people) {
//     console.log(person)
//     if (person.budget === 3500) {
//         findedPerson === person
//     }
// }

// console.log(findedPerson)


// console.log(person)

// const person = people.find(person => person.budget === 3500)
// console.log(person)



// // Задача 1
// const text = 'Привет, мы изучаем Java Script'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

// console.log(cars.includes('Мазда')) 

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// const sqrt = num => Math.sqrt(num)


// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteresNumbers = pow2Fib.filter(num => {
//     return num > 20
// })
// console.log(pow2Fib) 
// console.log(filteresNumbers) 


const people = [
    {name: 'Aleksandr', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {    
    acc += person.budget    
    return acc
}, 0)
console.log(allBudget)