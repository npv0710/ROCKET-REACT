"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
exports.__esModule = true;
var account_1 = require("./account");
var promise_1 = require("./promise");
// x = 10;
// console.log('x = ' + x);
//let x: number = 20;
//console.log('x = ' + x);
//let y: string = '123abc';
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
 * Destructuring
 */
//Array
var a, b, rest;
_a = [10, 20], a = _a[0], b = _a[1];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20
_b = [10, 20, 30, 40, 50], a = _b[0], b = _b[1], rest = _b.slice(2);
console.log(rest);
// expected output: Array [30,40,50]
var date = [12, 11, 2022];
var day = date[0], month = date[1], year = date[2];
console.log('day = ' + day + '; month = ' + month + '; year = ' + year);
//Object
var person = {
    firstName: 'Nguyen Quang',
    lastName: 'Hai',
    age: 25
};
var f = person.firstName, l = person.lastName;
var ag = person.age;
var age = person.age;
console.log('Railway 38 reactjs Buoi2');
// Array()
var numbers = [1, 2, 3]; //typescript
var typeString = ['DEV', 'TEST', 'SCRUM_MASTER']; //typescript
var arrNumber = [10, 20, 30]; //javascript
var arrString = ['10', '20', '30']; //javascript
var numbers2 = __spreadArray([], numbers, true);
for (var i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}
var x = numbers[0], y = numbers[1], z = numbers[2];
console.log('x = ' + x);
console.log('y = ' + y);
console.log('z = ' + z);
//Thêm phần vào cuối mảng:
numbers.push(4);
console.log('---------------------');
var numbers3 = __spreadArray(__spreadArray([], numbers, true), [4, 5, 6], false);
// printArr(numbers);
// console.log('---------------------');
// printArr(numbers3);
//Thêm phần vào đầu mảng:
var listNumbers = __spreadArray([0], numbers, true);
console.log('list numbers: ');
printArr(listNumbers);
// var numbers4 = numbers.shift();
// console.log('---------------------');
// console.log(numbers4);
//printArr(numbers4);
// let tempString = typeString.shift();
// console.log(tempString);
// console.log('array temptString after shift: ')
// printArr(typeString);
//let tempNumbers = numbers.unshift(0);
// console.log('tempNumbers: ' + tempNumbers);
// console.log('array numbers after unshift: ')
// printArr(numbers);
// numbers.unshift(0);
// console.log('array numbers after unshift: ')
// printArr(numbers);
//Lấy ra phần tử cuối của mảng:
var tempNumber = numbers.pop();
var tempNumber2 = numbers[0];
var tempNumber3 = numbers[numbers.length - 1];
console.log('tempNumber: ' + tempNumber);
console.log('tempNumber2: ' + tempNumber2);
console.log('tempNumber3: ' + tempNumber3);
console.log('numbers after pop: ');
printArr(numbers);
//Gộp hai mảng
var arrCopy = __spreadArray(__spreadArray([], numbers, true), arrNumber, true);
console.log(' arr copy: ');
printArr(arrCopy);
//Xóa một phần tử của mảng tại một vị trị nhất định
numbers.splice(1, 2);
console.log('arr numbers after splice: ');
printArr(numbers);
//Function print array
function printArr(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}
//Object{}
var person = {
    firstName: 'Tom',
    lastName: 'Hanks',
    age: 50
};
//var {firstName: f, age: ag} = person;// Từ ES6 mới dùng khai báo này
//Tương đương
// var a = person.age;
// var f = person.firstName;
var lastName = person.lastName; // var lastName = person.lastName;
console.log('last name: ' + lastName);
console.log(person);
console.log('f: ' + f);
console.log('a: ' + a);
// person.age = 60;
// console.log('person after destructure: ');
// console.log(person);
var person2 = __assign({}, person);
console.log('person2: ');
console.log(person2);
var person3 = __assign(__assign({}, person), { age: 60 });
console.log('person3: ');
console.log(person3);
var person4 = __assign(__assign({}, person), { famousFilm: 'Forest Gump 1994' });
console.log('person4: ');
console.log(person4);
var person5 = __assign(__assign({}, person), { age: 60, famousFilm: 'Forest Gump 1994' });
console.log('person5: ');
console.log(person5);
var person6 = { firstName: person.firstName, lastName: person.lastName };
console.log('person6: ');
console.log(person6);
var arrTemp = Object.keys(person);
//var arrTemp2 = Object.values(person);
console.log(arrTemp);
//console.log(arrTemp2);
//Template string
var fullName = 'Nguyen Van A';
var fullName2 = 'Tran Van B';
var welcomeText = "Ch\u00E0o m\u1EEBng ".concat(fullName, " t\u1EDBi v\u1EDBi VTI Academy");
var welcomeText2 = 'Chào mừng ' + fullName2 + ' tới với VTI Academy';
console.log(welcomeText);
console.log(welcomeText2);
/**
 *  Arrow function
 */
// const functionA = (x) => {
//     console.log('x = ' + x);
// }
// const functionA = x => {
//     console.log('x = ' + x);
// }
var fncA = function (x) { return console.log('x = ' + x); };
// const fncSqrt = x => {
//     return Math.pow(x, 0.5);
// }
var fncSqrt = function (x) { return Math.pow(x, 0.5); };
var fncSquare = function (x) {
    return fncMultiply(x, x);
};
//const fncSquare = x => fncMultiply(x, x);
var fncMultiply = function (a, b) {
    return a * b;
};
//console.log('square function: ' + fncSquare(10));
// function c (x) {
//     console.log('function a running...');
//     return function d(y) {
//         console.log('function b running...');
//         return x + y
//     };
// }
// function c (x) {
//     return y => {
//         return x + y
//     };
// }
var c = function (x) { return function (y) { return x + y; }; };
console.log(c(200)(300));
var signin = function (username, password, callback) {
    callback(username, password);
};
// const showUserInfo = (username, password) => {
//     console.log('Username: ' + username + '; password: ' + password);
// }
var showUserInfo = function (email) {
    return function (username, password) {
        console.log('Username: ' + username + '; password: ' + password);
        console.log('Email: ' + email);
    };
};
// const showUserInfo = email => (username, password) => {
//     console.log('Username: ' + username + '; password: ' + password);
//     console.log('Email: ' + email);
// }
//signin('tuananh', '123abc', showUserInfo);
signin('tuananh', '123abc', showUserInfo('111111@gmail.com'));
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
// signinPromise('quanghai', '111111')
// .then(function(x) {
//     console.log(x);
// })
// // .catch((msgErr) => {
// //     console.log(msgErr);
// // })
// .catch(msgErr => {
//     console.log(msgErr);
// })
// getUserInfo()
// .then(data => {
//     console.log('request success & data received: ');
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })
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
(0, promise_1.combinePromise3)();
