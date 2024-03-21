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

// Remove local storage
export function removeLocalStorage() {
    // Deletes old data in local storage
    localStorage.removeItem(key);
};

//getting the amount of positive transactions per day
export function getAmountPosTrans() {
    let arr = readLocalStorage()
    let amountArr = []
    let amount = 0
    let length = arr.length

    let date = arr[0].date

    for (let i = 0; i < length; i++) {
        if (date === arr[i].date) {

            if (i == (length - 1)) {

                if (arr[i].price > 0) {
                    amount += arr[i].price
                    amountArr.push(amount)
                }
                amountArr.push(amount)
            }

            if (arr[i].price > 0) {
                amount += arr[i].price
            }
        } else {
            //debugger;
            if (i == (length - 1)) {

                if (arr[i].price > 0) {
                    amount += arr[i].price
                    amountArr.push(amount)
                }
                amountArr.push(amount)
            }

            if (arr[i].price > 0) {
                amountArr.push(amount)
                amount = 0
                amount += arr[i].price
                date = arr[i].date

            } else {
                date = arr[i].date
                amountArr.push(amount)
                amount = 0
            }
        }
    }
    return amountArr
};

//Getting the amount of negative transactions per day
export function getAmountNegTrans() {
    let arr = readLocalStorage()
    let amountArr = []
    let amount = 0
    let length = arr.length

    let date = arr[0].date

    for (let i = 0; i < length; i++) {
        if (date === arr[i].date) {

            if (i == (length - 1)) {

                if (arr[i].price < 0) {
                    amount += arr[i].price
                    amountArr.push(Math.abs(amount))
                }
                amountArr.push(Math.abs(amount))
            }

            if (arr[i].price < 0) {
                amount += arr[i].price
            }
        } else {

            if (i == (length - 1)) {

                if (arr[i].price < 0) {
                    amount += arr[i].price
                    amountArr.push(Math.abs(amount))
                }
                amountArr.push(Math.abs(amount))
            }

            if (arr[i].price < 0) {
                amountArr.push(Math.abs(amount))
                amount = 0
                amount += arr[i].price
                date = arr[i].date

            } else {
                date = arr[i].date
                amountArr.push(Math.abs(amount))
                amount = 0
            }
        }
    }
    return amountArr
};

//Getting an array of dates from local storage
export function getDateLocalStorage() {
    let arr = readLocalStorage()
    let dateArr = []
    let first = false

    for (let i = 0; i < (arr.length - 2); i++) {
        if (!first) {
            dateArr.push(arr[i].date)
            first = true
        }
        if (arr[i].date !== arr[i + 1].date) {
            dateArr.push(arr[i + 1].date)
        }
    }
    return dateArr
};

// Filling local storage with data
export function fillingLocalStorage() {
    const arrLocalStorage = readLocalStorage()

    if (arrLocalStorage.length == 0) {
        writeLocalStorage([
            { expense: 'test', date: '14.03.2024', price: 5 },
            { expense: 'test', date: '14.03.2024', price: 500 },
            { expense: 'test', date: '14.03.2024', price: -5 },
            { expense: 'test', date: '14.03.2024', price: 50 },
            { expense: 'test', date: '14.03.2024', price: 5 },
            { expense: 'test', date: '14.03.2024', price: -50 },
            { expense: 'test', date: '14.03.2024', price: 5 },
            { expense: 'test', date: '14.03.2024', price: 50 },
            { expense: 'test', date: '14.03.2024', price: -500 },
            { expense: "test", date: "15.03.2024", price: 500 },
            { expense: "test", date: "15.03.2024", price: -5 },
            { expense: "test", date: "15.03.2024", price: 50 },
            { expense: "test", date: "15.03.2024", price: -500 },
            { expense: "test", date: "15.03.2024", price: -50 },
            { expense: "test", date: "15.03.2024", price: 500 },
            { expense: "test", date: "15.03.2024", price: -5 },
            { expense: "test", date: "15.03.2024", price: 50 },
            { expense: "test", date: "15.03.2024", price: 50 },
            { expense: "test", date: "15.03.2024", price: -50 },
            { expense: "test", date: "16.03.2024", price: 5 },
            { expense: "test", date: "16.03.2024", price: 500 },
            { expense: "test", date: "16.03.2024", price: -5 },
            { expense: "test", date: "16.03.2024", price: 500 },
            { expense: "test", date: "16.03.2024", price: 5 },
            { expense: "test", date: "16.03.2024", price: -50 },
            { expense: "test", date: "16.03.2024", price: 5 },
            { expense: "test", date: "16.03.2024", price: 5 },
            { expense: "test", date: "16.03.2024", price: -50 },
            { expense: "test", date: "16.03.2024", price: 5 },
            { expense: "test", date: "17.03.2024", price: 50 },
            { expense: "test", date: "17.03.2024", price: -5 },
            { expense: "test", date: "17.03.2024", price: 50 },
            { expense: "test", date: "17.03.2024", price: 5 },
            { expense: "test", date: "17.03.2024", price: -50 },
            { expense: "test", date: "17.03.2024", price: 5 },
            { expense: "test", date: "17.03.2024", price: 500 },
            { expense: "test", date: "17.03.2024", price: -5 },
            { expense: "test", date: "17.03.2024", price: 50 },
            { expense: "test", date: "17.03.2024", price: 5 },
            { expense: "test", date: "19.03.2024", price: -50 },
            { expense: "test", date: "19.03.2024", price: 5 },
            { expense: "test", date: "19.03.2024", price: 50 },
            { expense: "test", date: "19.03.2024", price: -50 },
            { expense: "test", date: "19.03.2024", price: 5 },
            { expense: "test", date: "19.03.2024", price: 50 },
            { expense: "test", date: "19.03.2024", price: -500 },
            { expense: "test", date: "19.03.2024", price: 50 },
            { expense: "test", date: "19.03.2024", price: 5 },
            { expense: "test", date: "19.03.2024", price: -500 },
            { expense: "test", date: "20.03.2024", price: 5 },
            { expense: "test", date: "20.03.2024", price: 500 },
            { expense: "test", date: "20.03.2024", price: -5 },
            { expense: "test", date: "20.03.2024", price: 50 },
            { expense: "test", date: "20.03.2024", price: 5 },
            { expense: "test", date: "20.03.2024", price: -5 },
            { expense: "test", date: "20.03.2024", price: 50 },
            { expense: "test", date: "20.03.2024", price: 5 },
            { expense: "test", date: "20.03.2024", price: -50 },
            { expense: "test", date: "20.03.2024", price: 5 },
            { expense: "test", date: "21.03.2024", price: 50 },
            { expense: "test", date: "21.03.2024", price: -5 },
            { expense: "test", date: "21.03.2024", price: 50 },
            { expense: "test", date: "21.03.2024", price: 5 },
            { expense: "test", date: "21.03.2024", price: -500 },
            { expense: "test", date: "21.03.2024", price: 5 },
            { expense: "test", date: "21.03.2024", price: 50 },
            { expense: "test", date: "21.03.2024", price: -5 },
            { expense: "test", date: "21.03.2024", price: 50 },
            { expense: "test", date: "21.03.2024", price: -5 }
        ])
    }

};