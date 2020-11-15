import {
    renderItemsList,
    cheeses
} from "./utils.js";


const findButton = document.getElementById("find-button");
const clearFindButton = document.getElementById("clear-find-button");
const findInput = document.getElementById("find-input");
const sortByPriceAscButton = document.getElementById("sort-button");



findButton.addEventListener("click", () => {
    const foundCheeses = cheeses.filter(cheese => cheese.title.search(findInput.value) !== -1);

    renderItemsList(foundCheeses);
});

sortByPriceAscButton.addEventListener("click", () => {
    const sortedCheeses = cheeses.sort((cheese_1, cheese_2) => (cheese_1.price > cheese_2.price) ? 1 : -1);

    renderItemsList(sortedCheeses);
});

clearFindButton.addEventListener("click", () => {
    findInput.value = "";

    renderItemsList(cheeses);
});