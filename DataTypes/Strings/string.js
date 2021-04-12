/*let string = "Guests:\n * Anton\n * Lera\n * Stas"
console.log(string)

console.log('I\'m the CIQer')*/

/*let str = 'My name is Anton'
console.log(str.length, str[str.length - 1])

console.log('a' > 'Z')*/


/*let str = ''

for (let i = 65; i < 220; i++) {
    str += String.fromCodePoint(i)
}
console.log(str)*/

/*function ucFirst(str) {
    if (!str) return str

    str = str[0].toUpperCase() + str.slice(1)
    console.log(str)
}

ucFirst('hello world')*/


/*function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );*/


/*function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}*/

/*function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…'
    } else {
        return str
    }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 15))*/


/*function extractCurrencyValue(str) {
    return +str.slice(1)
}

console.log(extractCurrencyValue('$120'))
console.log(extractCurrencyValue('$120') === 120)*/






