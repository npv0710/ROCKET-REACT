export {};
import User from './account';
import { showAccountInfo} from './account';
import { login, loginWithCallback, loginWithCallback2, showWelcome, showLoginResult, functionA } from './callback';
import { signinPromise, getUserInfo, combinePromise } from './promise';
// x = 10;
// console.log('x = ' + x);
let x: number = 20;
//console.log('x = ' + x);

let y: string = '123abc';
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


signinPromise('quanghai', '111111')
.then(function(x) {
    console.log(x);
})
// .catch((msgErr) => {
//     console.log(msgErr);
// })
.catch(msgErr => {
    console.log(msgErr);
})

getUserInfo()
.then(data => {
    console.log('request success & data received: ');
    console.log(data);
})
.catch(err => {
    console.log(err);
})

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