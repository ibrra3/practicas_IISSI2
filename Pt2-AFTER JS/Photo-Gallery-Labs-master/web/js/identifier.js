


"use strict";



console.log("hi");
console.log("test2");
window.alert('this is an alert , beware');
function main(){
    // code
}

document.addEventListener("DOMContentLoaded",main);
// TEKKERA ELECTRONIX 
function birthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear, ${username}`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`);
}


birthday("TEKKERA ELECTRONIX",10);

birthday("spooky",6);

function suma (x,y){
    let res = x+y;
    return res;
}

let resultados = suma(3,4);

console.log("resultado es " + resultado);

function isEven(x){
    
    if (x%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(10));


function esPar(x){
    return x%2 ==0 ? true : false;
}

console.log(esPar(5));




function checkEmail(email){
    if(email.includes("@")){
        return true;
    }
    else {
        return false;
    }
}


console.log(checkEmail("fakeemail.com"));


function emailCheck(email){
    return email.includes("@") ? true:false;
}

console.log(emailCheck("fakeemail.com"));




let lista = [1,2,3];
let lista1 = ["a","b","c"];

 let objecto = {
    obj1:1 ,
    obj2: 2 , 
    obj3: 3
 }

 console.log(lista);
 console.log(lista1);
 console.log(objecto);



let pares = lista.filter(esPar);
console.log(pares);

let nums = lista.filter(x => x>1);
console.log(nums)
let evenNums = lista.filter(x => x%2 ===0);
console.log(evenNums)




// INDEX ----------------------------------------------------------------


console.log("hi");
console.log("test2");
window.alert('this is an alert , beware');


document.addEventListener("DOMContentLoaded",main);

