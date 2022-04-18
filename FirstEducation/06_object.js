//Обьекты

const person = {
    name:'Aleksandr',
    age: 37,
    isProgrammer: true,
    language: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1+3)]: 'Computed key', // key_4
    greet () {
        console.log('greet from person')
    },
    info() {
        // console.log('this:', this)
         console.info('Информация про человека по имени:', this.name) 
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person['ageKey'])
// console.log(person['complex key'])
// console.log(person)
// person.greet()

// person.age++
// person.language.push('by')
// person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// Пример старого синтаксиса 
// const name = person.name
// const age = person.age
// const language = person.language

// Пример нового синтаксиса 
// const {name, age: personAge, language} = person
// console.log(name, personAge, language)

// console.log(person)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {        
//     }
//     console.log('key:', key)
//     console.log('value:', person[key])
// }

// Object.keys(person).forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })



// Context
// person.info(person)

const logger = {
    keys() {
        console.log('Object Keys;', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false) {
        if(top) {
            console.log('------Start-------')
        }
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
            if (between) {
                console.log('-----------')
            }
    })
    if(bottom) {
        console.log('------End-------')
    }
}
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
