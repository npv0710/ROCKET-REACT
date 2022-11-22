import axios from 'axios';
import { XMLHttpRequest } from 'xmlhttprequest-ts';

const signinPromise = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'quanghai' && password === '111111') {
                let dataReturn = {
                    status: 200,
                    message: 'Signin successfully'
                };
                resolve(dataReturn);
            }else {
                let error = {
                    status: 401,
                    message: 'Signin fail'
                }
                reject(error);
            }
        }, 3000)
    })
}

function getUserInfo() {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        
        request.open('GET', 'https://jsonplaceholder.typicode.com/post/1');

        request.onload = () => {
            if (request.status == 200) {
                resolve(request.responseText);
            }else {
                reject(Error(request.responseText))
            }
        }

        request.onerror = () => {
            reject(Error('Error fetching data'))
        }

        request.send();
    })
}

function getUserInfo2() {
    return new Promise((resolve, reject) => {
        axios.get('https://tutorialzine.com/misc/files/example.json')//Bản chất là một promise
        .then(response => {
            // console.log('response data from axios: ')
            // console.log(response.data)
            resolve(response.data);
        })
        .catch(err => reject(err))
    })
}

/* promise.all - paralle actions*/
var firstPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('This is the first promise');
            resolve('The first finished after 2 seconds');
        }, 2000)
    })
}

var secondPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('This is the second promise');
            //resolve('The second finished after 4 seconds');
            reject('The second finished after 4 seconds and error');
        }, 4000)
    })
}

var thirdPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('This is the third promise');
            resolve('The third finished after 6 seconds');
        }, 6000)
    })
}

var combinePromise = () => {
    Promise.all([firstPromise(), secondPromise(), thirdPromise()])
        .then(data => {
            console.log('data from combine promise on module promise: ');
            console.log(data);
        })
        .catch(err => {
            console.log('Error form promise: ');
            console.log(err);
        })
}

var combinePromise2 = () => {
    Promise.all([firstPromise, secondPromise, thirdPromise])
    .then(data => {
        console.log('data from combine promise on module promise: ');
        console.log(data);
        return data;
    })
    .catch(err => {
        console.log('Error form promise: ')
        console.log(err);
        return err;
    })
}

var combinePromise3 = () => {
    Promise.allSettled([firstPromise(), secondPromise(), thirdPromise()])
    .then(data => {
        console.log('data from combine promise on module promise: ');
        console.log(data);
        return data;
    })
    .catch(err => {
        console.log('Error form promise: ')
        console.log(err);
        return err;
    })
}

export {
    signinPromise,
    getUserInfo,
    getUserInfo2,
    combinePromise,
    combinePromise2,
    combinePromise3,
}
