/*
let arr = ['Apple', 'Pen', 'Table', 'Car']

arr.push('Milk')
console.log(arr)

arr.shift()
console.log(arr)*/

/*
let array = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = array;
console.log(array.length, shoppingCart.length)
shoppingCart.push('Butter')
console.log(`${array.length}: ${array}\n`, `${shoppingCart.length}: ${shoppingCart}`)*/


let array = ["Jazz", "Blues"]
array.push("Rock'n'Roll")
// console.log(array)

//array[Math.floor((array.length - 1) / 2)] = 'Classic'
// console.log(array)

console.log(array.shift())
// console.log(array)
array.unshift('Rap', 'Reggae')
// console.log(array)
array[Math.floor((array.length - 1) / 2)] = 'Rock'
console.log(array)
