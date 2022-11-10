"use strict";
exports.__esModule = true;
exports.showLoginResult = exports.showWelcome = exports.loginWithCallback2 = exports.loginWithCallback = exports.functionA = exports.login = void 0;
function login(username, password) {
    setTimeout(function () {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Username / password valid');
        }
        else {
            console.log('Username / password invalid');
        }
    }, 3000);
    console.log('Login successfully');
    console.log('Welcome ' + username);
}
exports.login = login;
function loginWithCallback(username, password, callback) {
    setTimeout(function () {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Username / password valid');
        }
        else {
            console.log('Username / password invalid');
        }
        callback();
    }, 3000);
}
exports.loginWithCallback = loginWithCallback;
var showWelcome = function () {
    console.log('Login successfully');
    console.log('Welcome to VTI Group');
};
exports.showWelcome = showWelcome;
function loginWithCallback2(username, password, callback) {
    setTimeout(function () {
        var messageResponse = '';
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Username / password valid');
            messageResponse = 'Login successfully';
        }
        else {
            console.log('Username / password invalid');
            messageResponse = 'Login fail';
        }
        callback(username, messageResponse);
    }, 3000);
}
exports.loginWithCallback2 = loginWithCallback2;
var showLoginResult = function (username, messageResponse) {
    if (messageResponse === 'Login successfully') {
        console.log(messageResponse);
        console.log('Welcome ' + username);
    }
    else
        console.log(messageResponse);
};
exports.showLoginResult = showLoginResult;
var functionA = function (callback) {
    console.log('This is funtion A...');
    callback();
};
exports.functionA = functionA;
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
function getMoney(currentBalance) {
    console.log('Get money from ATC successfully!');
    console.log('Your current balance: ' + currentBalance);
}
function getMoneyATM(cardNumber, PIN, callback) {
    callback();
}
getMoneyATM('123abc', '111', function () {
    insertCard(function () {
        checkInfo(function () {
            withdraw(function () {
                checkBalance(function () {
                    getMoney(1000);
                });
            });
        });
    });
});
