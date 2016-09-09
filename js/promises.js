'use strict';

(function() {

    // Typicall callback hell
    function one(cb) {
        if (1 === 1) {
            cb(null, 2);
        } else {
            cb('Error')
        }
    };

    one(function cb(errMessage, num) {
        if(errMessage) {
            console.log(errMessage)
        } else {
            console.log(`This is my ${num}`);
        }
    });


    // Example 1: promise get rejected
    var hello = new Promise(function(resolve, reject) {
        if(1===2) {
            resolve('Hello...');
        } else {
            reject('Some error...');
        }
    });

    // this promise will be rejected
    hello
    .then(function(str) {
        return str + ' world';
        })
        .then(function(str) {
            console.log(str);
        })
        .catch(function(err) {
            console.log(err);
        });

    // Example 2: promise gets resolved
    var goodbye = new Promise(function(resolve, reject) {
        if(1===1) {
            resolve('Goodbye ');
        } else {
            reject('Error again...')
        }
    });

    goodbye
        .then(function(str) {
            return(`${str} Weaste`);
        })
        .then(function(str) {
            return(`${str}!`)
        })
        .then(function(str) {
            console.log(str);
        });

    // Example 3: Yet another example
    var p = new Promise(function(resolve, reject) {
        // always resolve
        resolve(1);
    });

    var addIfResolved = function(val) {
        return new Promise(function(resolve, reject) {
            resolve(val + 10);
        })
    }

    p
     .then(addIfResolved) // add 10
     .then(addIfResolved) // add 10 more
     .then(v=>console.log(`Yay! ${v}`)); // result is 21

}());