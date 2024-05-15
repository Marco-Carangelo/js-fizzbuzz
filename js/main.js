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

    // }

    // Print "Fizz" if i is multiple of 3
    if (i % div3 === 0) {

        resultPrint += fizz;

    }
    // Print "Buzz" if i is multiple of 5
    if (i % div5 === 0) {

        resultPrint += buzz;

    }
    //Print i if his value is not multiple of 3 and 5
    if (i % div3 != 0 && i % div5 != 0) {

        resultPrint += i;

    }




    console.log(resultPrint);

}