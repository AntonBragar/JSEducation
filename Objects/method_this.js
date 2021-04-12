/*
let user = {
    name: 'Anton',
    age: 24,
}

user.sayHello = function() {
    console.log('Hello')
}

user.sayHello()*/


/*
let user = {
    sayHi(){
        console.log('Hello')
    },
    age: 25,
    name: 'Ivan',
}

user.sayHi()
console.log(user.name, user.age)*/


/*
let user = {
    sayHi(){
        console.log("Hello " + this.name)
    },
    name: 'Anton',
    age: 24,
}

user.sayHi()
*/

/*
let user = {name: 'Anton'}
let admin = {name: 'Admin'}

function sayHi() {
    console.log('Hello ' + this.name)
}

user.f = sayHi
admin.f = sayHi

user.f()
admin.f()
admin['f']()*/

/*function sayHi(name) {
    console.log('Hello ' + name)
}

sayHi('Anton')*/

/*let user = {
    name: "Джон",
    go: function() { console.log(this.name) }
}

user.go()*/


let makeUser = (name, age) => {
    return {
        name: name,
        age: age,
        sayHi() { console.log('Hello ' + this.name) }
    }
}

let retard = makeUser('Anton', 24)
console.log(retard)
retard.sayHi()