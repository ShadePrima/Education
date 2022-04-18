// 1 Строки

// const name = 'Aleksanr'
// const age = 37 

// function getAge() {
//     return age
// }

// // const output = 'Привет меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// // const output = `Привет, меня зовут ${name} и мой возраст ${age < 40 ? 'b' : 'a'} лет.`
// // console.log(name)
// // console.log(output)

// const output = `
//     <div>This is div</div>
//     <p>This is p</p>
// `

// console.log(output)

// const myName = 'Aleksandr'
// console.log(myName.length)
// console.log(myName.toUpperCase())
// console.log(myName.toLowerCase())
// console.log(myName.charAt(0))
// console.log(myName.indexOf('ndr'))
// console.log(myName.startsWith('Alek'))
// console.log(myName.toLowerCase().startsWith('aleks'))
// console.log(myName.endsWith('n'))
// console.log(myName.repeat(3))
// const string = '     password      '
// console.log(string.trim())

function logPerson(s, name, age) {
    if (age <0){
        age = 'Еще не родился'
    }
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Aleksndr'
const personName2 = 'Maksim'
const personAge = '37'
const personAge2 = '-10'

const output = logPerson `Имя: ${personName}, Возраст: ${personAge}`
const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}`

console.log(output)
console.log(output2)