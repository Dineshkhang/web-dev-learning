let obj = {
    name:'Dinesh',
    age: 21,
    weight: 52,
    height: "6ft",
greet: function () {
    console.log("hello Gee ke xa khabar");
    
}
};
console.log(obj);
obj.greet();
console.log(typeof(obj));


let arr = [1,2,3,4,5];
let brr = new Array('love',1,true);
brr.push('Dinesh'); //insert new item at end
brr.pop(); //remove last item

brr.shift(); //remove first item
brr.unshift("bamboo") //insert new item at start 
brr.push(6);
brr.push(7);
brr.push(8);
brr.push(9);
console.log(brr.slice (0,3));


console.log(brr);
console.log(arr);

let  arr1 =[10,20,30];
let ansArray = arr1.map((number) =>{
    return number*number;

})
console.log(ansArray);

// filter
let z=[1,4,7,4,8]
 let evenarray = z.filter((number) => {
    // if(number%2 ===0){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return number%2 ===2;
});

console.log(evenarray);

let crr = [ 10,'dinesh',true,"dih khf",20,"dinesh2"];
 let bns = crr.filter((value) => {
if (typeof(value) === 'string') {
    return true;
}
else{
    return false;
}
});
console.log(bns);

// reduce 
let ar = [ 1,3,6,8];
let cns = ar.reduce((acc,curr) => {
return acc+curr;
},0);
console.log(cns);

// 
let br =[9,395,5,63,6,8];
 let br1 = br.sort();
console.log(br);
