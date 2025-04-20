
////ex1
// let firstpromise = new Promise((resolve, reject) =>{
//     console.log("Dinesh");
//     resolve(1001); //egg1
//     // reject(new Error("interal server error")); eg2
// });
 
// //ex2
// function sayName() {
//     console.log("MY name is Dinesh");
    
// }
// setTimeout(sayName, 10000);

// // ex3
let Promise1 = new Promise((resolve, reject) => {
let sucess = true;

if (sucess) {
    resolve("promise fullfilled");
} 
else{
    reject("Promise Rejected");
}
});
Promise1.then((message) => {
    console.log("then ko message " +message);
    }).catch((error) =>{
        console.log("error:" +error);
        
    })