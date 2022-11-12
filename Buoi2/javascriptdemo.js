console.log('Demo javascript...');

//console.log(variable);

//x = 10;
console.log('x = ' + x);

var y = 100;
console.log('y = ' + y);
y = '123abc'
console.log('y = ' + y);

function total(a, b) {
    var x = 500;
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('Total a, b: ' + (a + b));
}

total(3, 5);
total(1);
total(6, 'xyz');
total(1, 2, 3);

function user (username, age) {
    this.username = username;
    this.age = age
}

var user1 = new user('Nguyen Van A', 27);

console.log(user1);

class Account {
    constructor(fullname, username) {
        this.fullname = fullname;
        this.username = username;
    }
    fullname;
    username;
    
}

var ac = new Account();

console.log(ac);
ac.fullname = 'Nguyen Tuan Anh';
console.log(ac);

var ac2 = new Account('Nguyen Cong Phuong', 'congphuong');
console.log(ac2);
ac2.username = 'xuantruong';
console.log(ac2);

var x = 25;

console.log('x + 25 = ' + (x + 25));

//Con trỏ this trong callback
var user = {
    username: 'Quang Hai',
    age: 25,
    showInfo() {
        console.log('Username: ' + this.username + '; Age: ' + this.age);
    }
}

user.showInfo();

function handleClick() {
    user.showInfo();
}

$('#btn').css({color: 'red'})

$('#btn').click(function() {
    alert('Click Me...');
})

$('#btn').click(user.showInfo)
