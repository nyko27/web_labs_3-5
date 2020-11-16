import {
    addItemToPage,
    countTotalPrice,
    renderItemsList,
    getInputs,
} from "./utils.js";

const submitButton = document.getElementById("submit-button");
const findButton = document.getElementById("find-button");

const clearFindButton = document.getElementById("clear-find-button");
const findInput = document.getElementById("find-input");
const sortByPriceAscButton = document.getElementById("sort-button");

let cheeses = []

const addCheese = ({ desc, title, price }) => {
    const cheeseId = Math.floor(Math.random() * 10000);

    const newCheese = {
        id: cheeseId,
        title,
        desc,
        price: price
    };

    cheeses.push(newCheese);
    addItemToPage(newCheese);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const { title, desc, price } = getInputs();
    addCheese({
        title,
        desc,
        price
    });
    countTotalPrice(cheeses);
});

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