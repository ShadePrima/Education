// for (var i = 1; i < 21; i++) {
//     console.log(i)
// }

const button = document.querySelector('button')

button.onclick = () => {
    let name = prompt('Как вас зовут?')
    alert('Привет ' + name + ', рады видеть вас')
}

var myName = 'Aleksandr'
var myAge = 37

var test = 6 < 3
var iAmalive = true


var myNameArray = ['Chris', 'Bob', 'Jim']
var myNumberArray = [10, 15, 40]

myNameArray[0] // should return 'Chris'
myNumberArray[2] // should return 40

console.log(myNameArray)


var myInt = 5
var myFloat = 6.667
var myTable = 7


let x = 50
let y = 50

x = 50
y = 50 

ctx.fillStyle = 'green'
ctx.fillRect (10, 10, x, y)