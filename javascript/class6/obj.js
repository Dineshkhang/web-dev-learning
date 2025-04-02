// Object
let a = {
    name: 'Dinesh',
    age:21
}
console.log(a["name"]); // alternative method to get output
console.log(a.age);


//array with objects
let b = [
    {
        name:'DInesh',
        class:1
    }
    ,
    {
        name:'ram',
        class:3
    }
]
console.log(b[1].name);


let c = {
    name:'Something',
    class:12,
    present:true
}
let d = Object.keys(c);
let e = Object.values(c);
console.log(d);
console.log(e);

