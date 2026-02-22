// Q1. Create a Bank Account (Using Closures for Private State)
// It should return an object with:

// a. deposit(amount)
// b. withdraw(amount)
// c. getBalance()
// d. getTransactionHistory()

// Requirements:
// a. Balance must be private (not directly accessible)
// b. Prevent negative deposits
// c. Maintain transaction history array
// d. Return error messages instead of crashing.


function createBankAccount(initialBalance=0){
    let balance = initialBalance;
    const transactions = [];

    function deposit(amount){
        if (amount <= 0){
            return "Deposit amount must be positive";
        }
        balance += amount;
        transactions.push({type: "Deposit", amount, balance});
        return `Deposit ${amount}`;

    }

    function withdraw(amount){
        if (amount <= 0){
            return "Withdrawal amount must be positive";
        }
        if (amount > balance){
            return "Insufficent balance";
        }
         balance -= amount;
        transactions.push({type: "Withdraw", amount, balance});
        return `Withdraw ${amount}`;  
    }

    function getBalance(){
        return balance;
    }
    function getTransactionHistory(){
        return[...transactions]
    }
   return{
    deposit,
    withdraw,
    getBalance,
    getTransactionHistory
   }

}