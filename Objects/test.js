/*function makeUser (name, age) {
    return {
        name: name,
        age: age,
    }
}

console.log(makeUser('Joseph', 23))*/


/*
let obj = {
    0: "Тест" // то же самое что и "0": "Тест"
};

// обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
console.log(obj["0"])
console.log(obj[0])*/

/*let user = { age: 30 };

console.log( 'age' in user )*/

let user = {
    name: "John",
    age: 20,
    isMarried: true,
}

for (let key in user) {
    console.log(key + ": " + user[key])

}
