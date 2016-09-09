'use strict';

(function() {

    // default arguments
    function defaultArgs(param1='default', param2=param1+'concatenated') {
        console.log(param1, param2);
    }

    //defaultArgs();
    //defaultArgs(undefined, 'overridden param2');

    // spread operator
    console.log("Spread operator");
    function logg(param1, param2, param3) {
        console.log(param1, param2, param3);
    }

    let arr = [1,2,8];
    logg(...arr);

    // rest operator
    console.log("Rest operator");
    function testRest(...args) {
        return args;
    }

    console.log(testRest(1,2,3,4,5,6,7));

    // templates
    var template = `this is a
    template`;

    let a = 5,
        b = 'something else';

    function reverseString(string) {
        return string.split(' ').reverse().join(' ');
    }
    console.log(reverseString('kika shla domoj'));
    console.log(`a is ${a}, and b is ${b}, this is b reversed: ${reverseString(b)}`);

    // let and const, scoped to the nearest enclosing block
    console.log("LET AND CONST");
    var mu = 2;

    {
        let mu = 4;
    }

    console.log(mu);

    // const represents a constant reference to a value, frozen is only the assignment
    const ARR = [5, 6];
    ARR.push(8);
    console.log(ARR);

    console.log("ARROW FUNCTION");
    let myFunc = (a,b) => a + b;

    console.log('The sum is: ' + myFunc(2,3));

    let fruitArr = ['banana', 'apple', 'jahoda'];

    let breakfast = fruitArr.map(fruit => {
        return fruit + 's';
    });

    console.log(breakfast);

    console.log('templating');

    let mA = 5,
        mB = 'smth else';

    function str(literals, ...values) {
        return literals[2] + ': ' + values[2];
    }
    console.log(str`A equals ${a}, and B equals ${b}`); 

    // only objects can be used as keys, weakly referenced, can be garbage collected
    let weakMap = new WeakMap();
    var o1 = {};
    var o2 = window;
    var o3 = function() {}; //function is an object

    weakMap.set(o1, 'o1 value');
    weakMap.set(o2, 'o2 value');
    weakMap.set(o3, 'o3 value');
    console.log(weakMap);

    // get method
    console.log(weakMap.get(o2));

    // delete method
    console.log('Does mymap have o2? ' + weakMap.has(o2));
    weakMap.delete(o2);
    console.log('Deleted o2 with delete function. Does mymap have o2? ' + weakMap.has(o2));

    // arrow function

    let breakfast1 = ['apple', 'banana', 'pear'].map((fruit) => {
        return fruit;
    });

    console.log(breakfast1);
})();