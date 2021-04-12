/*
function showMessage() {
    alert("Hi everybody")
}

showMessage()*/

/*let userName = "Tony"

function sayHello () {
    let message = "Hello, " + userName
    console.log(message)
}

sayHello()*/

/*let user = "Tony"

function showMessage() {
    let user = "Vasya"
    let message = "Hello, " + user
    console.log(message)
}

console.log(user)
showMessage()
console.log(user)*/


// Parametrs

/*
function showMessage (from, text) {
    alert(from + ": " + text)
}

showMessage('Tony', 'How`re you?')
showMessage('Vasya', 'I`m fine')
*/


/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('А родители разрешили?');
    }
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
    alert( 'Доступ получен' );
} else {
    alert( 'Доступ закрыт' );
}
*/


/*
function checkAge(age) {
    // With ?
    return (age > 18) ? true : confirm('Родители разрешили?');
    // OR with ||
    return (age > 18) || confirm('Родители разрешили?');
}*/


/*function min(a, b) {
    // if ( a < b ) {
    //     return a
    // } else {
    //     return b
    // }
    return (a < b) ? a : b
 }

console.log(min(2,5))
console.log(min(8,3))
console.log(min(7,1))*/


/*function pow(x, n) {
    return x ** n
}

console.log(pow(3,2))*/

/*function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
}*/


/*
function pow(x, n ) {
    let result = x

    for (let i = 1; i < n; i++){
        result *= x
    }
    return result
}

let x = prompt('X?', '')
let n = prompt('n?', '')

if (n < 1) {
    alert(`Степень ${n} не поддерживается`)
} else {
    alert(pow(x,n))
}*/
