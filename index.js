// Code your solutions in this file
let array = []

function writeCards( names , event){
    for(let i = 0; i < names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}


function countDown(number){
    while (number >= 0){
        console.log(number);
        number--
    } 
}

