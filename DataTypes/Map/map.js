let recipeMap = new Map([
    ["Огурец", 500],
    ["Помидор", 350],
    ["Лук", 50]
])

/*
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable)
}

for (let amount of recipeMap.values()) {
    console.log(amount)
}

for (let entry of recipeMap) {
    console.log(entry)
}*/

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}` )
})


