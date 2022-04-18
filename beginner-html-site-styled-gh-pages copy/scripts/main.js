// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world! Проверка';

// var num1 = 2
// var num2 = 3

// multiply(4,7);

// function multiply(num1, num2) {
//     var result = num1 * num2;
//     return result;
// }
// console.log(result);

// document.querySelector ('html').onclick = function() {
//     alert('Пожалуйста не кликай по мне')
// }

var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src', 'images/firefox2.jpeg')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')


function setUserName () {
    var myName = prompt('Please enter your name.')
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Mozila is cool, ' + myName
}

if(!localStorage.getItem('name')) {
    setUserName()
} else {
    var storedName = localStorage.getItem('name')
    myHeading.textContent = 'Mozilla is cool, ' + storedName
}

myButton.onclick = function() {
    setUserName()
}