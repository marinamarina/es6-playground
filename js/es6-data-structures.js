'use strict';

(function() {
    console.log('SETS.');
    let array = [1,1,1,2,3,4,5];

    // make a set out of an array
    let mySet = new Set(array);
    console.log(mySet, 'size= ' + mySet.size);

    let mySet2 = mySet.add('something').add('else');
    console.log(mySet2);
    console.log(mySet2.has('something'));
    mySet2.forEach((item) => {
        console.log('Set item ' + item);
    });
    let mySet3 = mySet2.clear();
    console.log(mySet3);

    console.log('MAPS AND WEAK MAPS.');

    let myMap = new Map();
    let keyString = 'key';
    let keyObj = {};
    let keyFunc = function() {};

    // seting the values
    myMap.set(keyString, 'value assoc with a string');
    myMap.set(keyObj, 'value associated with an object');
    myMap.set(keyFunc, 'value associated with a function');

    console.log(myMap);

    // getting the values
    console.log(myMap.get(keyObj));

    console.log('Iterators');
    // provides next() method that returns object with value and done
    // to create an iterator: Symbol.iterator(), .entries() or .values()
    let arr = [1,2,3,5];
    let itr = arr[Symbol.iterator]();
    console.log(itr.next()); // 1
    console.log(itr.next()); // 2
    console.log(itr.next()); // 3
    console.log(itr.next()); // 5
    console.log(itr.next());

    let mySetItr = new Set(['a', 'b', 'c']);
    let setEntries = mySetItr.entries();

    console.log(setEntries.next());

    let myMapItr = new Map([['a' , 1], ['b', 2], ['c', 3]]);
    let mapEntries = myMapItr.entries();

    console.log(mapEntries.next());
    console.log(mapEntries.next());
    console.log(mapEntries.next());
    console.log(mapEntries.next());

    let setValues = mySetItr.values(),
        mapValues = myMapItr.values();

    console.log(setValues.next());
    console.log(mapValues.next());

    let mapKeys = myMapItr.keys();

    console.log(mapKeys.next()); 

})();