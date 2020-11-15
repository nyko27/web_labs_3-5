import {
    getInputs,
    cheeses,
    checkAllInputs
} from "./utils.js";


const submitButton = document.getElementById("submit-button");
const hideWindowButton = document.getElementById("window_button");

const addCheese = ({ desc, title, price }) => {

    const cheeseId = Math.floor(Math.random() * 10000);

    const newCheese = {
        id: cheeseId,
        title,
        desc,
        price: price
    };

    cheeses.push(newCheese);

};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, desc, price } = getInputs();

    addCheese({
        title,
        desc,
        price
    });

    if (checkAllInputs()) {
        document.getElementById("window_content").style.display = "block";
        document.getElementById("window_text_content").innerText = "Item added!";
    } else {
        document.getElementById("window_content").style.display = "block";
        document.getElementById("window_text_content").innerText = "Input all values to edit item!";
    }

});

hideWindowButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("window_content").style.display = 'none';
});