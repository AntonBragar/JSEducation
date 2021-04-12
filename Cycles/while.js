
// Cycle while

/*
let i = 0
while (i < 10) {
    console.log(i);
    i++;
}*/

/*
let i = 5;
while (i) {
    console.log(i)
    i--
}*/
/*

let i = -3
while (i != 4) {
    console.log(i)
    i++
}*/

// Cycle do .. while

/*
let i = 0
do {
    console.log(i)
    i++
} while (i < 5)*/

// Cycle for
/*
for (let i = 0; i < 7; i++) {
    console.log(i)
}*/

// Example of break

/*let sum = 0
while (true) {
    let value = +prompt("Введите число", '');

    if (!value) {
        break
    }
    sum += value
}

alert('Сумма: ' + sum )*/

// Example of continue

/*
for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) continue
    console.log(i)
}*/


// Выводим четные числа

/*
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) console.log(i)
}*/

/*
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}*/

/*
let i = 0
while (i < 3) {
    console.log( `Number: ${i}.` )
    i++
}
*/

/*let num;

do {
    num = +prompt("Введите число, большее 100?", '')
} while (num <= 100 && num)*/

/*let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }

        console.log( i ); // простое число
    }*/



let a = 10

NextStep:
    for (let i = 2; i <= a; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue NextStep;
        }
        console.log( i )
    }
