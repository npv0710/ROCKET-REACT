"use strict";
exports.__esModule = true;
var account_1 = require("./account");
var promise_1 = require("./promise");
// x = 10;
// console.log('x = ' + x);
var x = 20;
//console.log('x = ' + x);
var y = '123abc';
//console.log('y = ' + y);
function total(a, b) {
    // console.log('a = ' + a);
    // console.log('b = ' + b);
    // console.log('Total a, b: ' + (a + b));
}
function total2(a, b) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('Total a, b: ' + (a + b));
    return a + b;
}
//total(3);
//total(3, '123');
total(3, 5);
var Account = /** @class */ (function () {
    function Account(fullName, username) {
        this.fullName = fullName;
        this.username = username;
    }
    Account.prototype.getUsername = function () {
        return this.username;
    };
    Account.prototype.setUsername = function (username) {
        this.username = username;
    };
    return Account;
}());
var ac = new Account('Nguyen Quang Hai', 'quanghai');
// console.log(ac);
// ac.fullName = 'Doan Van Hau';
// console.log(ac);
// ac.setUsername('vanhau');
// console.log(ac);
/**
 * using module
 */
var user = new account_1["default"](1, 'Nguyen Van A');
// console.log(user);
// showAccountInfo(user);
// loginWithCallback('Nguyen Van A', '123abc', showWelcome);
// loginWithCallback2('Nguyen Van A', '123abcd', showLoginResult);
// functionA(function() {
//     console.log('This is callback function...');
// });
/**
 * Promise
 */
//signinPromise('quanghai', '111111');
//console.log(signinPromise('quanghai', '111111'));
var handleSuccess = function (data) {
    console.log(data);
};
var handleError = function (msg) {
    console.log(msg);
};
// signinPromise('quanghai', '111112')
// .then(handleSuccess)
// .catch(handleError)
(0, promise_1.signinPromise)('quanghai', '111111')
    .then(function (x) {
    console.log(x);
})["catch"](function (msgErr) {
    console.log(msgErr);
});
(0, promise_1.getUserInfo)()
    .then(function (data) {
    console.log('request success & data received: ');
    console.log(data);
})["catch"](function (err) {
    console.log(err);
});
// console.log('Log function getUserInfo: ')
// console.log(getUserInfo());
// getUserInfo()
// .then(data => {
//     console.log('Data response in program: ');
//     console.log(data);
// })
// .catch(err => console.log(err))
//combinePromise();
// console.log('log combine promise: ');
// combinePromise();
//console.log(combinePromise());
// combinePromise()
// .then(data => {
//     console.log('data from combine promise on program: ')
//     console.log(data);
// })
// .catch(err => console.log(err));
//combinePromise();
//combinePromise2();
//combinePromise3();
