const startingBalance = 100

class Customer {
    constructor(name, accountID, password) {
        this.name = name,
        this.accountID = accountID,
        this.password = password,
        this.online = false,
        this.accountBalance = startingBalance,
        this.transactionHistory = []
    }  

    logIn(accountID, password) {
        if (accountID === this.accountID && password === this.password) {
            this.online = true;
        } else code 
            this.online = false;
        }
    

    deposit(deposit) {
        this.accountBalance += deposit
        this.transactionHistory.push(`date: ${deposit}`)
    }

    withdraw(wd) {
        console.log(this.accountBalance, wd)
        console.log(this.online)
        if (this.online == true && this.accountBalance > wd) {
            this.accountBalance = this.accountBalance - wd;
            this.transactionHistory.push(`date: ${wd}`)
            } else {
                throw new Error('Insufficient Fund - Please Add Funds')
            }       
    }
    
    get viewBalance() {
        console.log(this.accountBalance)
        return this.accountBalance
    }

    get transactionHistory() {
        return this.transactionHistory
    }
}




module.exports = {
    Customer,
    startingBalance
};
