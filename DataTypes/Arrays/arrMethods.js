/*
let arr = [1, false, false, false, 5, 8, false]

arr.forEach(console.log)
console.log(arr.indexOf(false))*/


/*let array = ['cat', 'dog', 'lion']
array.forEach(alert)*/

/*
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 3)
let someUser = users.filter(item => item.id < 3)
console.log(someUser)
console.log(user.name)
*/


let array = [
    {id: 1, name: 'Igor', country: 'Romania'},
    {id: 2, name: 'Max', country: 'Ukraine'},
    {id: 3, name: 'Anton', country: 'Israel'},
    {id: 4, name: 'Stepan', country: 'Russia'},
    {id: 5, name: 'Valya', country: 'Ukraine'},
    {id: 6, name: 'Lera', country: 'Pakistan'},
    {id: 7, name: 'Vitya', country: 'Ukraine'},
    {id: 8, name: 'Roman', country: 'United States'},
]

let userFromUkraine = array.filter(item => item.country == 'Ukraine')
console.log(userFromUkraine)
console.log(userFromUkraine.name)


