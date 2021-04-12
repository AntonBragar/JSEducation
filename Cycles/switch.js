/*let a = 2 + 2;

switch (a) {
    case 3:
        console.log('Less, wrong answer')
        break
    case 4:
        console.log('You`re right')
        break
    case 5:
        console.log('More than right answer')
        break
}

let arg = prompt("Введите число?");
switch (arg) {
    case '0':
    case '1':
        alert( 'Один или ноль' );
        break;

    case '2':
        alert( 'Два' );
        break;

    case 3:
        alert( 'Никогда не выполнится!' );
        break;
    default:
        alert( 'Неизвестное значение' );
}*/





// Case 1

/*
switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}*/

//Results

/*
let browser = prompt('Which browser do you use?', '')
if (browser == 'Edge') {
    alert( "You've got the Edge!" )
}  else if ( browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert( 'Okay we support these browsers too' )
} else {
    alert('We hope that this page looks ok!')
}
*/



// Case 2

/*const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
    alert('Вы ввели число 0');
}

if (number === 1) {
    alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
}*/

// Result


const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break

    case 1:
        alert('Вы ввели число 1')
        break

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break
}