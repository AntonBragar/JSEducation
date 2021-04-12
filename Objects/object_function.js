let user = (name, age) => {
    return {
        name: name,
        age: age,
        sayHi: function () {
            console.log(`Hello, ${this.name}. You are ${this.age} years old.`)
        }
    }
}

let student = user('Anton', '24')
student.sayHi()

