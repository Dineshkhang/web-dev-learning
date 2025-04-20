const fn = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products"
  );
  const data = await response.json();
  return data;
};

// let a = document.querySelector(".jokes");

window.addEventListener("DOMContentLoaded", async () => {
  const data = await fn();
  console.log("data", data);
});
//   a.innerHTML = `
//   <div>
//   <h1>${data.setup}</h1>
// <p>${data.punchline}</p>

//   </div>
//   `;
// });
