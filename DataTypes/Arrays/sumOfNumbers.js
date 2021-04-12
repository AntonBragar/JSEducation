function sumInput() {
    array = []
    while (true) {
        let value = +prompt('Input your number', '')

        if (value == "" || value == null || !isFinite(value)) break;
        array.push(value)
    }
    let sum = 0
    for (let elem of array) {
        sum += elem
    }
    return sum
}

alert(sumInput())