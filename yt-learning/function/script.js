// let obj = {
//     name:'Dinesh',
//     age:25,
//     height:" 6ft",
//     greet: function () {
//         console.log("Namste");
        
//     }
// };
  

// function eg1
function  name() {
    console.log("Dinesh khang")
    
}
    name();
// eg2
    function num() {
        for (let a = 0; a < 100; a++) {
            console.log(a);
            
            
        }
    };
    num();

    // eg3
    function pnum(pno) {
        console.log("pnum:",pno);
        
    }
    pnum(13);

// eg4
function  avg(num1,num2) {
    let avg =(num1 + num2)/2;
    console.log("avg",avg);
    
}
avg(2,6);

// eg5 return function
function getsum(a,b,c) {
    let sum = a+b+c;
    return sum;
}
let ans = getsum(2,4,6 );
console.log("getting sum", ans);

// eg6
function getMyName(firstName, lastName) {
    let fullName = firstName +" "+ lastName;
    return fullName;
    
}
let fullName = getMyName("Dinesh", "Khang");
console.log("fullname", fullName);

// eg7 another method of using function
const mul = function (a,b) {
    return (a*b);

}
let a = mul (2,4);
console.log(a);


// eg8
let sqno = function (num) {
    let ans = num**2;
    return ans;
}
let sq = sqno(6);
console.log(sq);

// three ways of function
// 1 
function epx(x,y) {
    let ans = x**y;
    return ans;
    
}
console.log(epx(2,10));

// 2

let ex = function(x,y) {
    let ans = x**y;
    return ans;
    
}
console.log(ex(2,10));

// 3 arrow function try to always this function. es6 new

const getExp = (x,y) =>{
let ans =x**y;
return ans;
}
console.log(getExp(2,10));
