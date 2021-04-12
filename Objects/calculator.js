let calculator = {
    read() {
      this.a = +prompt('First Number', '')
      this.b = +prompt('Second Number', '')
    },

    sum(){
        return this.a + this.b
    },

    mul(){
        return this.a * this.b
    }


};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );