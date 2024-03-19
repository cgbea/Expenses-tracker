const key = "0"

// Writes to local storage
export function writeLocalStorage(transactionArray) {

    var jsonTransactionArray = JSON.stringify(transactionArray);

    // Deletes old data in local storage
    localStorage.removeItem(key);

    // Writes new data
    localStorage.setItem(key, jsonTransactionArray);
};

// Load from local storage 
export function readLocalStorage() {

    let transactionArray = [];

    var data = localStorage.getItem(key);
    if (data) {
        transactionArray = JSON.parse(data);
    }

    // Return array
    return transactionArray;
};

// Function that returns balance
export function getBalance() {

    let transactionArray = readLocalStorage()

    transactionArray = transactionArray.reduce((acc, num) => acc + num.price, 0)

    // return array
    return transactionArray;
};

// Function that returns only positive transactions
export function getPositiveTransactions() {

    let transactionArray = readLocalStorage()

    transactionArray = transactionArray.filter(i => i.price > 0)

    // return array
    return transactionArray;
};

// Function that returns only negative transactions
export function getNegativeTransactions() {

    let transactionArray = readLocalStorage()

    transactionArray = transactionArray.filter(i => i.price < 0)

    // return array
    return transactionArray;
};

// Function that returns total amount of positive transactions
export function getPositiveTotal() {

    let transactionArray = getPositiveTransactions()

    transactionArray = transactionArray.reduce((acc, num) => acc + num.price, 0)

    // return array
    return transactionArray;
};

// Function that returns total amount of negative transactions
export function getNegativeTotal() {

    let transactionArray = getNegativeTransactions()

    transactionArray = transactionArray.reduce((acc, num) => acc + num.price, 0)

    // return array
    return transactionArray;
};
