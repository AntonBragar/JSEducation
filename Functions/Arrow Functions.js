// let func = (arg1, arg2, ...argN) => expression

/*
let func = function(arg1, arg2, ...argN) {
    return expression;
};
*/

// let sum = (a, b) => a + b
// console.log(sum(2,2))
// console.log(sum(12,4))
//
// let pow = (c, d) => c * d
// console.log(pow(4,5))
// console.log(pow(7,7))

/*
let sayHi = () => console.log("hello")
sayHi()*/

/*let name = prompt('What is your name?', '')
let age = +prompt('How old are you', '')

let welcome = (age > 18) ? () => alert(`Welcome to the club, ${name}`) :
    () => alert(`Go to school, ${name}`)

welcome()*/


/*
let sum = (a, b) => {
    let result = a + b
    return result
}

console.log(sum(5,3))
console.log(sum(7,4))*/



/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);*/


/*
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no()
}

ask('Are you hungry?',
    () => alert('Yes, sure'),
    () => alert('No, Thanks')
)
*/

/*
let buy = (name, age) => {
    name = prompt('What is your name', '')
    age = +prompt('How old are you?', '')
    alert(`Your name is ${name} and you are ${age} years old`)
}

buy()*/

let sum = (a, b) => console.log(a + b)
sum(1,2)