let map = new Map()

map.set('banana', 2)
map.set('orange', 6)
map.set('apple', 1)

let obj = Object.fromEntries(map.entries())
console.log(obj)

/*for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
}*/

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`)
}


