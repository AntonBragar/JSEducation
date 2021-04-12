/*
let user = {
    name: "Anton",
    surname: "Brahar",
    age: 23,
}

let clone = Object.assign({}, user)

console.log(clone)
clone.name = 'Lera'
clone.surname = 'Tischenko'
clone.age = 25
console.log(clone)
console.log(user)*/

/*let user = {
    name: 'John',
}

let admin = user

user = null
console.log(admin)
console.log(user)*/

/*
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

console.log(family)*/


function marry(man, woman) {
    man.wife = woman
    woman.husband = man

    return {
        father: man,
        mother: woman
    }
}

let family = marry({name: 'Anton'}, {name: 'Lera'})
console.log(family)