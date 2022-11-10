function login(username: string, password: string) {
    setTimeout(() => {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Username / password valid');
        }else {
            console.log('Username / password invalid');
        }
    }, 3000)
    console.log('Login successfully');
    console.log('Welcome ' + username);
}

function loginWithCallback(username: string, password: string, callback) {
    setTimeout(() => {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Username / password valid');
        }else {
            console.log('Username / password invalid');
        }
        callback();
    }, 3000)
}

const showWelcome = () => {
    console.log('Login successfully');
    console.log('Welcome to VTI Group');
}



function loginWithCallback2(username: string, password: string, callback) {
    setTimeout(() => {
        let messageResponse = ''
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Username / password valid');
            messageResponse = 'Login successfully';
        }else {
            console.log('Username / password invalid');
            messageResponse = 'Login fail';
        }
        callback(username, messageResponse);
    }, 3000)
}

const showLoginResult = (username: string, messageResponse: string) => {
    if (messageResponse === 'Login successfully') {
        console.log(messageResponse);
        console.log('Welcome ' + username);
    }else console.log(messageResponse);
}

const functionA = (callback) => {
    console.log('This is funtion A...');
    callback();
}


function insertCard(callback) {
    callback();
}

function checkInfo(callback) {
    callback();
}

function withdraw(callback) {
    callback();
}

function checkBalance(callback) {
    callback();
}

function getMoney(currentBalance: number) {
    console.log('Get money from ATC successfully!');
    console.log('Your current balance: ' + currentBalance);
}

function getMoneyATM(cardNumber, PIN, callback) {
    callback();
}

getMoneyATM('123abc', '111', function() {
    insertCard(function() {
        checkInfo(function() {
            withdraw(function() {
                checkBalance(function() {
                    getMoney(1000);
                })
            })
        })
    })
})

export {
    login,
    functionA,
    loginWithCallback,
    loginWithCallback2,
    showWelcome,
    showLoginResult
}