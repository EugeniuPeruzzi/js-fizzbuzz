
let list = document.getElementById('row');

"use strict";
// Ciclo for

for (let num = 1; num <= 100; num++){

    if ((num % 3 === 0) && (num % 5 === 0)){
        let num = 'FizzBuzz'
        console.log(num);
        list.innerHTML += `<div class="buzzfizz m-3 box align-items-center d-flex justify-content-center"><h2>${num}</h2></div>`
    }
    else if (num % 5 === 0){
        let num = 'Buzz';
        console.log(num);
        list.innerHTML += `<div class="buzz m-3 box align-items-center d-flex justify-content-center"><h2>${num}</h2></div>`
    }
    else if (num % 3 === 0 ){
        let num = 'Fizz';
        console.log(num);
        list.innerHTML += `<div class="fizz m-3 box align-items-center d-flex justify-content-center"><h2>${num}</h2></div>`
    }
    else {
        console.log(num)
        list.innerHTML += `<div class="number m-3 box align-items-center d-flex justify-content-center"><h2>${num}</h2></div>`
    } 


}