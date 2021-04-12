/*
function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.sayHi = function () {
        console.log('My name is ' + this.name)
    }
}

let student = new User('Anton')
student.sayHi()
console.log(student)*/



function Calculator() {
    this.read = function () {
        this.a = +prompt('First number', '');
        this.b = +prompt('Second number', '');
    };
    this.sum = function () {
        return this.a + this.b
    };
    this.mul = function () {
        return this.a * this.b
    }

}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
