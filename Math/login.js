let password
let start = prompt("Кто там?",'')
if (start == null) {
    alert('Отменено')
} else if (start == '') {
    alert('Я вас не знаю')
} else if (start == 'Админ') {
    password = prompt('Пароль?', '')
} if (password == 'Я главный') {
    alert('Здравствуйте')
} else if (password == '') {
    alert('Неверный пароль')
} else if (password == null) {
    alert('Отмена')
}



/*else if (password == 'Я главный') {
    alert('Здравствуйте')
} else if (password == null) {
    alert('Отмена')
} else if (password == '') {
    alert('Неверный пароль')
}*/