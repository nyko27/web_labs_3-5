import {
    renderItemsList,
    checkAllInputs,
    getInputs,
    clearInputs
} from "./utils.js";

import { getAllCheeses, updateCheese, deleteCheese } from "./api.js";

const findButton = document.getElementById("find-button");
const clearFindButton = document.getElementById("clear-find-button");
const findInput = document.getElementById("find-input");
const sortByPriceAscButton = document.getElementById("sort-button");
const submitButton = document.getElementById("submit-button");
const hideWindowButton = document.getElementById("window_button");

let cheeses = [];

let currentItemId;

const removeCheese = (element) => {
    const itemId = element.target.id.replace('delete_', "");
    deleteCheese(itemId).then(renderCheeses(editCheese, removeCheese));

}

const editCheese = (element) => {
    const itemId = element.target.id.replace('edit_', "");
    currentItemId = itemId;
    document.getElementById("operations_container").style.display = 'block';

}

const renderCheeses = async(editCheese, removeCheese) => {
    const allCheeses = await getAllCheeses();
    cheeses = allCheeses;
    renderItemsList(cheeses, editCheese, removeCheese);
}


findButton.addEventListener("click", () => {
    const foundCheeses = cheeses.filter(cheese => cheese.title.search(findInput.value) !== -1);

    renderItemsList(foundCheeses, editCheese, removeCheese);
});

sortByPriceAscButton.addEventListener("click", () => {
    const sortedCheeses = cheeses.sort((cheese_1, cheese_2) => (cheese_1.price > cheese_2.price) ? 1 : -1);

    renderItemsList(sortedCheeses, editCheese, removeCheese);
});

clearFindButton.addEventListener("click", () => {
    findInput.value = "";

    renderItemsList(cheeses, editCheese, removeCheese);
});


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let { title, description, price } = getInputs();

    if (checkAllInputs()) {
        price = Number(price);

        updateCheese(currentItemId, { title, description, price });

        document.getElementById("window_content").style.display = "block";
        document.getElementById("window_content").style.border = "none";
        document.getElementById("window_content").style.backgroundColor = " rgb(182, 233, 199)";
        document.getElementById("window_text_content").innerText = "Item was edited!";

    } else {
        document.getElementById("window_content").style.display = "block";
        document.getElementById("window_content").style.backgroundColor = "LightPink";
        document.getElementById("window_text_content").innerText = "Input all the values to edit this item!";
    }

});

hideWindowButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("window_content").style.display = 'none';
    if (checkAllInputs()) {
        document.getElementById("operations_container").style.display = 'none';
        clearInputs();
        renderCheeses(editCheese, removeCheese);
    }
});

renderCheeses(editCheese, removeCheese);