//========3. Операторы сравнения и условия=========

/*
Операторы сравнения 
<, >, <=, >= меньше, больше, меньше или равно, больше или равно
==  нестрогое сравнение 
=== строгое сравнение 
!= нестрогое неравенство 
!== строгое неравенство 
*/

// console.log(10 < 5) // false
// console.log(20 < 80) // true

// let result = 10 == 5 //false
// console.log(result)

// console.log('5' == 5) //true
// console.log('5' === 5) //folse

// let number = 5
// if(number == 10) {
//     console.log(1111)
//     console.log(number)
// }

// =========Условия============

/*
if (условие)  {
    //Код который будет выполнен если условие верно 
} else {
    //Код который будет выполнен если условие неверно 
}
*/

const time = 20

if (time < 12) {
    console.log('Доброе утро')
} else {
    console.log('Добрый день')
}

if (time < 12) {
    console.log('Доброе утро')
} else if (time >= 12 && time < 18) {
    console.log('Добрый день')
} else {
    console.log('Добрый вечер')
}

/*
Логические операторы 
&& логическое и 
|| логическое или 
!true логическое НЕ
*/