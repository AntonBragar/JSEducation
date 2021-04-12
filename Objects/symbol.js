/*
let id = Symbol('id')

console.log(id)*/

let user = {
    name: 'Vasya',
}

let id = Symbol('id')

user[id] = 1

console.log(user[id])
