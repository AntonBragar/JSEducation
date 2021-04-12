function Accumulator(startingValue) {
    this.value = startingValue

    this.read = function () {
        this.value += +prompt('Insert your number', '')
    }
}


let accumulator = new Accumulator(10); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений