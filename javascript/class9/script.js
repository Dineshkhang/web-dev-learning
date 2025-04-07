let arr = [
  {
    Name: "xyz",
    img: "https://img.drz.lazcdn.com/static/np/p/7dcaf6b157836afa7c6a2edabad8ab2f.jpg_400x400q80.jpg_.webp;",
    price: "RS3000",
    button: "BUY NOW",
  },

  {
    Name: "xyz",
    img: "https://img.drz.lazcdn.com/static/np/p/7dcaf6b157836afa7c6a2edabad8ab2f.jpg_400x400q80.jpg_.webp;",
    price: "RS3000",
    button: "BUY NOW",
  },
  {
    Name: "xyz",
    img: "https://img.drz.lazcdn.com/static/np/p/7dcaf6b157836afa7c6a2edabad8ab2f.jpg_400x400q80.jpg_.webp;",
    price: "RS3000",
    button: "BUY NOW",
  },
  {
    Name: "xyz",
    img: "https://img.drz.lazcdn.com/static/np/p/7dcaf6b157836afa7c6a2edabad8ab2f.jpg_400x400q80.jpg_.webp;",
    price: "RS3000",
    button: "BUY NOW",
  },

  {
    Name: "xyz",
    img: "https://img.drz.lazcdn.com/static/np/p/7dcaf6b157836afa7c6a2edabad8ab2f.jpg_400x400q80.jpg_.webp;",
    price: "RS3000",
    button: "BUY NOW",
  },

  {
    Name: "xyz",
    img: "https://img.drz.lazcdn.com/static/np/p/7dcaf6b157836afa7c6a2edabad8ab2f.jpg_400x400q80.jpg_.webp;",
    price: "RS3000",
    button: "BUY NOW",
  },
];

let store = document.querySelector(".things");
let button = document.querySelector(".btn2");
button.addEventListener("click", () => {
  let card = arr
    .map((a) => {
      return `
<div class = "saman">
    <img src="${a.img}" alt="">
    <h1>${a.Name}</h1>
    <h4>${a.price}</h4>
    <button class="btn2">${a.button} </button>
</div>
    `;
    })
    .join("");
  console.log(card);
  store.innerHTML = card;
});
