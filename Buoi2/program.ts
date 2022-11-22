export {};
import User from './account';
import { showAccountInfo} from './account';
import { login, loginWithCallback, loginWithCallback2, showWelcome, showLoginResult, functionA } from './callback';
import { signinPromise, getUserInfo, combinePromise, combinePromise3 } from './promise';
// x = 10;
// console.log('x = ' + x);
//let x: number = 20;
//console.log('x = ' + x);

//let y: string = '123abc';
//console.log('y = ' + y);

function total(a: number, b: number){
    // console.log('a = ' + a);
    // console.log('b = ' + b);
    // console.log('Total a, b: ' + (a + b));
}

function total2(a: number, b: number): number{
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('Total a, b: ' + (a + b));
    return a + b;
}

//total(3);
//total(3, '123');
total(3, 5);

class Account {
    public fullName: string;
    private username: string;

    constructor(fullName: string, username: string) {
        this.fullName = fullName;
        this.username = username;
    }

    public getUsername() {
        return this.username;
    }

    public setUsername(username: string) {
        this.username = username;
    }
}

var ac = new Account('Nguyen Quang Hai', 'quanghai');

// console.log(ac);

// ac.fullName = 'Doan Van Hau';

// console.log(ac);

// ac.setUsername('vanhau');

// console.log(ac);

/**
 * using module
 */
var user = new User(1, 'Nguyen Van A');

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
 let a, b, rest;
 [a, b] = [10, 20];
 
 console.log(a);
 // expected output: 10
 
 console.log(b);
 // expected output: 20
 
 [a, b, ...rest] = [10, 20, 30, 40, 50];
 
 console.log(rest);
 // expected output: Array [30,40,50]
var date: number[] = [12, 11, 2022];
var [day, month, year] = date;
console.log('day = ' + day + '; month = ' + month + '; year = ' + year);
//Object
var person = {
    firstName: 'Nguyen Quang',
    lastName: 'Hai',
    age: 25
}

const { firstName: f, lastName: l } = person;
const { age: ag } = person;
const { age } = person;
console.log('Railway 38 reactjs Buoi2');


// Array()

var numbers: number[] = [1, 2, 3];//typescript
var typeString: string[] = ['DEV', 'TEST', 'SCRUM_MASTER'];//typescript

var arrNumber = [10, 20, 30];//javascript
var arrString = ['10', '20', '30'];//javascript

var numbers2: number[] = [...numbers]

for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}

var [x, y, z] = numbers;

console.log('x = ' + x)
console.log('y = ' + y)
console.log('z = ' + z)

//Thêm phần vào cuối mảng:
numbers.push(4);
console.log('---------------------');
var numbers3: number[] = [...numbers, 4, 5, 6];

// printArr(numbers);
// console.log('---------------------');
// printArr(numbers3);

//Thêm phần vào đầu mảng:

var listNumbers: number[] = [0, ...numbers];
console.log('list numbers: ')
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
let tempNumber = numbers.pop();
let tempNumber2 = numbers[0];
let tempNumber3 = numbers[numbers.length - 1];
console.log('tempNumber: ' + tempNumber);
console.log('tempNumber2: ' + tempNumber2);
console.log('tempNumber3: ' + tempNumber3);
console.log('numbers after pop: ')
printArr(numbers);

//Gộp hai mảng
var arrCopy: number[] = [...numbers, ...arrNumber];
console.log(' arr copy: ')
printArr(arrCopy);

//Xóa một phần tử của mảng tại một vị trị nhất định
numbers.splice(1, 2);
console.log('arr numbers after splice: ');
printArr(numbers);

//Function print array
function printArr(arr) {
    arr.forEach(element => {
        console.log(element)
    });
}

//Object{}

var person = {
    firstName: 'Tom',
    lastName: 'Hanks',
    age: 50,
    //famousFilm: 'Forest Gump'
}

//var {firstName: f, age: ag} = person;// Từ ES6 mới dùng khai báo này
//Tương đương
// var a = person.age;
// var f = person.firstName;

var { lastName } = person;// var lastName = person.lastName;

console.log('last name: ' + lastName);

console.log(person);
console.log('f: ' + f);
console.log('a: ' + a);

// person.age = 60;
// console.log('person after destructure: ');
// console.log(person);

let person2 = {...person};
console.log('person2: ')
console.log(person2);

let person3 = {...person, age: 60};
console.log('person3: ')
console.log(person3);

let person4 = {...person, famousFilm: 'Forest Gump 1994'};
console.log('person4: ')
console.log(person4);

let person5 = {...person, age: 60, famousFilm: 'Forest Gump 1994'};
console.log('person5: ')
console.log(person5);

let person6 = {firstName: person.firstName, lastName: person.lastName};
console.log('person6: ')
console.log(person6);

var arrTemp = Object.keys(person);
//var arrTemp2 = Object.values(person);

console.log(arrTemp);
//console.log(arrTemp2);

//Template string
var fullName: string = 'Nguyen Van A';
var fullName2: string = 'Tran Van B';
var welcomeText = `Chào mừng ${fullName} tới với VTI Academy`;
var welcomeText2 = 'Chào mừng ' + fullName2 +  ' tới với VTI Academy';

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

const fncA = x => console.log('x = ' + x);

// const fncSqrt = x => {
//     return Math.pow(x, 0.5);
// }

const fncSqrt = x => Math.pow(x, 0.5);

const fncSquare = x => {
    return fncMultiply(x, x);
}

//const fncSquare = x => fncMultiply(x, x);

const fncMultiply = (a, b) => {
    return a * b;
}

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

const c = x => y => x + y;

console.log(c(200)(300));

const signin = (username, password, callback) => {
    callback(username, password);
}

// const showUserInfo = (username, password) => {
//     console.log('Username: ' + username + '; password: ' + password);
// }

const showUserInfo = (email) => { 
    return (username, password) => {
        console.log('Username: ' + username + '; password: ' + password);
        console.log('Email: ' + email);
    }
}

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
const handleSuccess = (data) => {
    console.log(data);
}

const handleError = (msg) => {
    console.log(msg);
}

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

combinePromise3();