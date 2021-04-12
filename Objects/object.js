user = {
    name: 'Anton',
    surname: 'Brahar',
    age: 24,
}

console.log(user.name + " " + user.surname + " " + user.age)

user.name = "Peter"
console.log(user.name)

delete user.age

console.log(user)

user.age = 25
console.log(user)

let student = {}
student['age'] = 17
console.log(student.age)
let key = 'Love Lerochka'
student[key] = true
console.log(student[key])