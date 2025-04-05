// functionhosisting eg 
// in this example we call function on the top but due to function hoisting automatically it finds function first then run it. function logic also move on the top 
sayMyName("Dinesh"); 
function sayMyName(finalName) {
    console.log(finalName);
    
}
// // eg2
// var age =21;
// console.log(age);

// // eg3

// let cls = 12;
// console.log(cls);

function sayHelloG(){
    console.log("helloG");
    
}
sayHelloG();

// nxt eg 
let sayHello = function (){
    // console.log("helloVar");

    
}
console.log("sayHello");

// function call 
function greetMe(greet,fullName) {
    console.log("hello",fullName);
    greet()
}
let greet = function(){
    console.log("greeting for the day");
    
}
greetMe(greet,"Dinesh");
// greet();


// function in data structure 

const arr =[
    function (a,b) {
        return a+b;
    },
    function (a,b) {
        return a-b;
    },
    function (a,b) {
        return a*b;
    }
];
let n = arr[0];
let vv = (9,5);
console.log(vv);
