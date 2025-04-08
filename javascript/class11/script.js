async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  return data;
}

let storeContainer = document.querySelector(".store");
window.addEventListener("DOMContentLoaded", async () => {
  let data = await fetchData();
  let cards = data
    .map((i) => {
      return `
        <div class="cards">
            <img src="${i.image}" alt="">
        <div>
        <h2>tittle: ${i.title}</h2>
        <h2>price: ${i.price}</h2>
        <div class="cr">
            <h5>category: ${i.category}</h5>
            <h5>rate: ${i.rating.rate}</h5>
        </div>
        <button> Show More</button>
        <button> Buy Now</button>
        </div>
        </div>   `;
    })
    .join("");
  storeContainer.innerHTML = cards;
});
