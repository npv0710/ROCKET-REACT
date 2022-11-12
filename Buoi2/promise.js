"use strict";
exports.__esModule = true;
exports.combinePromise3 = exports.combinePromise2 = exports.combinePromise = exports.getUserInfo2 = exports.getUserInfo = exports.signinPromise = void 0;
var axios_1 = require("axios");
var xmlhttprequest_ts_1 = require("xmlhttprequest-ts");
var signinPromise = function (username, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (username === 'quanghai' && password === '111111') {
                var dataReturn = {
                    status: 200,
                    message: 'Signin successfully'
                };
                resolve(dataReturn);
            }
            else {
                var error = {
                    status: 401,
                    message: 'Signin fail'
                };
                reject(error);
            }
        }, 3000);
    });
};
exports.signinPromise = signinPromise;
function getUserInfo() {
    return new Promise(function (resolve, reject) {
        var request = new xmlhttprequest_ts_1.XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/post/1');
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.responseText);
            }
            else {
                reject(Error(request.responseText));
            }
        };
        request.onerror = function () {
            reject(Error('Error fetching data'));
        };
        request.send();
    });
}
exports.getUserInfo = getUserInfo;
function getUserInfo2() {
    return new Promise(function (resolve, reject) {
        axios_1["default"].get('https://tutorialzine.com/misc/files/example.json') //Bản chất là một promise
            .then(function (response) {
            // console.log('response data from axios: ')
            // console.log(response.data)
            resolve(response.data);
        })["catch"](function (err) { return reject(err); });
    });
}
exports.getUserInfo2 = getUserInfo2;
/* promise.all - paralle actions*/
var firstPromise = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('This is the first promise');
            resolve('The first finished after 2 seconds');
        }, 2000);
    });
};
var secondPromise = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('This is the second promise');
            //resolve('The second finished after 4 seconds');
            reject('The second finished after 4 seconds and error');
        }, 4000);
    });
};
var thirdPromise = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('This is the third promise');
            resolve('The third finished after 6 seconds');
        }, 6000);
    });
};
var combinePromise = function () {
    Promise.all([firstPromise(), secondPromise(), thirdPromise()])
        .then(function (data) {
        console.log('data from combine promise on module promise: ');
        console.log(data);
    })["catch"](function (err) {
        console.log('Error form promise: ');
        console.log(err);
    });
};
exports.combinePromise = combinePromise;
var combinePromise2 = function () {
    Promise.all([firstPromise, secondPromise, thirdPromise])
        .then(function (data) {
        console.log('data from combine promise on module promise: ');
        console.log(data);
        return data;
    })["catch"](function (err) {
        console.log('Error form promise: ');
        console.log(err);
        return err;
    });
};
exports.combinePromise2 = combinePromise2;
var combinePromise3 = function () {
    Promise.allSettled([firstPromise, secondPromise, thirdPromise])
        .then(function (data) {
        console.log('data from combine promise on module promise: ');
        console.log(data);
        return data;
    })["catch"](function (err) {
        console.log('Error form promise: ');
        console.log(err);
        return err;
    });
};
exports.combinePromise3 = combinePromise3;
