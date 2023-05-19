
let list = document.getElementById('row');

"use strict";
// Ciclo for

for (let num = 1; num <= 100; num++){

    if ((num % 3 === 0) && (num % 5 === 0)){
        let num = 'FizzBuzz'
        console.log(num);
        list.innerHTML += `<li>${num}</li>`
    }
    else if (num % 5 === 0){
        let num = 'Buzz';
        console.log(num);
        list.innerHTML += `<li>${num}</li>`
    }
    else if (num % 3 === 0 ){
        let num = 'Fizz';
        console.log(num);
        list.innerHTML += `<li>${num}</li>`
    }
    else {
        console.log(num)
        list.innerHTML += `<li>${num}</li>`
    } 


}