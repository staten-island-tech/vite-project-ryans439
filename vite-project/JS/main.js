import "./CSS/style.css"
import {instruments} from "./instrument.js";
const DOMSelectors = {
  container: document.querySelector(".instruments-container"),
  instrumentFilterButton: document.querySelector(".countryFilter"),
  allInstruments: document.querySelector(".allInstruments"),
  MostExpensiveInstruments: document.querySelector(".expensiveInstruments")
}
function createCard(arr) {
  DOMSelectors.container.innerHTML=""
    arr.forEach((i) => {
      const card = document.createElement("div"); // creats div called card
      card.classList.add("card");
      card.innerHTML = `
      <img class="img" src="${i.img}">
      <h1 class="name">${i.name}</h1>
      <p class="origin"> ${i.origin}</p>
      <p class="price"> $${i.price}</p>
      `;
      DOMSelectors.container.appendChild(card)
    });
  }
  createCard(instruments)

DOMSelectors.instrumentFilterButton.addEventListener("click", function(){
  let filteredInstruments = instruments.filter((instrument) => instrument.origin.includes("Italy"))
  createCard(filteredInstruments)
}
)
DOMSelectors.allInstruments.addEventListener("click", function(){
  createCard(instruments)
})

DOMSelectors.MostExpensiveInstruments.addEventListener("click", function(){
  let filteredInstruments = instruments.filter((instrument) => instrument.price > 2000)
createCard(filteredInstruments)})

const colorSwapButton = document.querySelector(".colorSwap");
  colorSwapButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

