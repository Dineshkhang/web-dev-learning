let items =[
    {
    img:"https://img.drz.lazcdn.com/g/kf/S1c3cc8d14f8e4addac23eb6992e8178cN.jpg_400x400q80.jpg_.webp",
    name: "clothes",
    Price: "Rs 350",
    buttion: "Buy"
},
    {
    img:"https://img.drz.lazcdn.com/g/kf/S1c3cc8d14f8e4addac23eb6992e8178cN.jpg_400x400q80.jpg_.webp",
    name: "clothes",
    Price: "Rs 350",
    buttion: "Buy"
},
    {
    img:"https://img.drz.lazcdn.com/g/kf/S1c3cc8d14f8e4addac23eb6992e8178cN.jpg_400x400q80.jpg_.webp",
    name: "clothes",
    Price: "Rs 350",
    buttion: "Buy"
},
    {
    img:"https://img.drz.lazcdn.com/g/kf/S1c3cc8d14f8e4addac23eb6992e8178cN.jpg_400x400q80.jpg_.webp",
    name: "clothes",
    Price: "Rs 350",
    buttion: "Buy"
},
    {
    img:"https://img.drz.lazcdn.com/g/kf/S1c3cc8d14f8e4addac23eb6992e8178cN.jpg_400x400q80.jpg_.webp",
    name: "clothes",
    Price: "Rs 350",
    buttion: "Buy"
},
    {
    img:"https://img.drz.lazcdn.com/g/kf/S1c3cc8d14f8e4addac23eb6992e8178cN.jpg_400x400q80.jpg_.webp",
    name: "clothes",
    Price: "Rs 350",
    buttion: "Buy"
},
];
let container = document.querySelector(".store");
// window.addEventListener("DOMContentLoaded"
let view = document.querySelector(".view"); 
view.addEventListener("click", () => {
let cards = items
.map((e) =>{
    return `
    <div class="goods">
    <img src="${e.img}" alt="">
    <h1>${e.name}</h1>
    <h4>${e.Price}</h4>
    <button class="btn">${e.buttion} </button>
</div>
    `;
})
.join("");

console.log(cards);
container.innerHTML = cards;

}) 