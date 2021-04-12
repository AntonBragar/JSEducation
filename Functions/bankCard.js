function BankCard() {
    let money = 0
    let pinCode = +prompt('Set your PinCode', '')

    function testPinCode() {
        return pinCode == +prompt('Enter your PinCode', '')
    }

    function testCash(cash) {
        return cash <= money
    }

    function getMoney(cash) {
        money -= cash
        console.log(`Get your money ${cash}`)
    }

    this.addMoney = function(cash) {
        money += cash > 0 ? cash : 0
    }

    this.showMoney = function () {
        testPinCode() ? console.log(money) : console.error('Wrong password')
    }

    this.getCash = function (cash) {
        testPinCode() ? testCash(cash) ? getMoney(cash) : console.warn('Not enough money') :
            console.error('Wrong PinCode')
    }
}

let card = new BankCard
