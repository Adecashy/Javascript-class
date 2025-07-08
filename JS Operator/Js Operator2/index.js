//Comparison operators
//==
//===
//>=
//<=
let num1 = "12";
let num2 = "12";
// // let output = num1 > num2;
// console.log(num1 === num2);
console.log(num1 !== num2);
let first = "a";
let second = "b";
let third = "c";
console.log("b" == second);

//LOGICAL AND
//true && true = true;
//true && false = false;
//false && true = false;
//false && false = false;


//LOGICAL OR
//true || true = true;
//true || false = true;
//false || true = true;
//false || false = false;

//Conditional statements

//if
let myNum = 30;
let bool = true;
if(!bool == false){
    console.log("Good");
    
}

if (40 <= 72 && 10 >= 20) {
    console.log("Good");
    
}

//if else
if (false) {
    console.log("Good");
    
} else {
    console.log("bad");
    
}

//else if
let studentAge = 22;
if (studentAge == 22) {
    console.log("hello");
    
}
else if (studentAge == 23) {
    console.log("You're growing");
    
}
else if (studentAge <= 25) {
    console.log("Great");
    
}
else if (studentAge == 22) {
    console.log("Excellent");
    
}
else {
   console.log("Invalid");
    
}


function clickMe() {

    let user = inp.value;
    if(user >= 1 && user <= 12){
        display.innerText = "You're a child"
    }else if(user > 12 && user <= 19){
        display.innerText = "You're a teenager"
    }else if(user > 19 && user <=29){
        display.innerText = "You're a Youth"
    }else if(user > 29 && user <=50){
        display.innerText = "You're an adult"
    }else {
        display.innerText = "invalid"
    }
}

