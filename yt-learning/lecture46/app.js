// global scope 
// var age =21;
// let age =21;
const age =21;
console.log(age);
{
    console.log(age);
}

if (true){
    console.log(age);
}
for (let i = 0; i <2; i++) {

    console.log(age);
}
function sayHello(params) {
    console.log("haha", age);
    
}
sayHello();

// block scope you only use with in the same function
function hi() {
    const b ="earth"
    console.log("fun",b);
    
}
// console.log(b); if we use this then we get error bcz variable used in the between{
// } can't acess.

hi();

// note var is global scope  , const and let are block scope

// temporal Dead zone

// we can't access value let , const before delcaration eg
let mark=100;
console.log(mark); //after declation i can use this, but if i console this up or down before declataion
