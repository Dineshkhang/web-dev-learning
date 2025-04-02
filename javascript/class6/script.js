// let a = [1,4,8,10];
// let b = a.map((v)=>{
//     return v+2;
// })
// console.log(b);

// let c = [1,4,8,10,6,14];
// let d = c.filter((v)=>{
//     return v%3==0;
// })
// console.log(d);

// // short hand 
// let e =[2,3,4,5,6,7]
// let f= e.filter((g) => g%3==0);
// console.log(f);


// sort 
let a = ['apple','orange','pear','jackfruit']
a.sort();
console.log(a);

let i =[5,6,2,29,8]
i.sort((a,b)=>b-a); //desending
// i.sort((a,b)=>a-b); //ascending
console.log(i);


// slice 

// let j =["apple","mango","banana","litch"]
// let k= j.slice(1)
// let l= j.slice(0,3)
// console.log(k);
// console.log(l);

// // find 
// let m =[0,6,2,1,9,8]
// let n = m.find((a) => a>4);
// console.log(n);

// // splice syntax ( itemIndex,delete.cout,value)
// let o =["apple","banana",'mango','pear']
// o.splice(1,0,'jackfruit')
// console.log(o);

// // reduce 
// let p =[1,3,5,7,3,8,0]
// let q =p.reduce(( accumulator,item) => {
// return accumulator + item;
// },0);
// console.log(q);

