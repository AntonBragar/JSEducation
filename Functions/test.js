function question(message, yes, no) {
    if (confirm(message)) yes()
        else no()
}

function ok() {
    alert('Yes, sure')
}

function notOk() {
    alert('Nope')
}

question('Are you gay?', ok, notOk)

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function showOk() {
    alert('You agree')
}

function showCancel() {
    alert('You decline')
}

ask('Are you agree?', showOk, showCancel)*/
