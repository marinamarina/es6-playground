'use strict';

(function() {
    console.log('hello');
    var hello = new Promise(function(resolve, reject) {
        resolve('Hello...');
    });

    hello.then(function(str) {
            return str + ' world';
          })
          .then(function(str) {
              console.log(str);
          });

}());