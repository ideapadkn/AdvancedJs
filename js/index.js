"use strict";
// ====================================

const innerContainer = document.querySelector(".inner");
const btn = document.querySelector(".btn");
const api = "https://jsonplaceholder.typicode.com/users";

async function showList() {
  try {
    const response = await fetch(api);
    if (response.ok) {
      const data = await response.json();
      createCards(data);
    } else {
      console.log("Error: " + response.status);
    }
  } catch (e) {
    console.log("Error catch: " + e);
  }
}

function createCards(cardsData) {
  cardsData.forEach((cardData) => {
    const card = `
      <div class="card flex flex-col items-center border-2 p-4 rounded-xl shadow w-[250px]">
        <div class="card__img bg-green-400 rounded-[100%] w-[60px] h-[60px] mb-5">
        </div>
        <div class="card__name text-xl font-semibold border-b mb-5">
          ${cardData.name}
        </div>
        <div class="card__email mb-2">
          ${cardData.email}
        </div>
        <div class="card__city mb-2">
          ${cardData.city}
        </div>
        <div class="card__website">
          ${cardData.website}
        </div>
      </div>
    `;
    innerContainer.insertAdjacentHTML("beforeEnd", card);
  });
}

btn.addEventListener("click", () => {
  if (innerContainer.childElementCount > 0) {
    innerContainer.innerHTML = "";
  } else {
    showList();
  }
});
