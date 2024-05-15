'use strict'

// Variables definition

const fizz = 'Fizz';
console.log(fizz);
const buzz = 'Buzz';
console.log(buzz);

const div3 = 3;
const div5 = 5;
console.log(div3);
console.log(div5);

console.log("****************************************");

//Main Program

for (let i = 1; i <= 100; i++) {
    let resultPrint = '';

    if (i % div3 === 0) {

        resultPrint += fizz;

    }

    if (i % div5 === 0) {

        resultPrint += buzz;

    } else {

    }


    console.log(resultPrint + i); // Temp control print

}