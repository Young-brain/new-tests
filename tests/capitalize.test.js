import * as MyFn from "../src/capitalize.js";

if (MyFn.capitalize('hi') != 'Hi') {
    throw new Error ('Function works no-correct!');
}

if (MyFn.capitalize('') != '') {
    throw new Error ('Function works no-correct!');
}

console.log('Tests passed!');