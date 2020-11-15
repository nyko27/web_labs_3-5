const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("decription-input");
const priceInput = document.getElementById("price-input")
const itemsContainer = document.getElementById("items-container");

const getItemId = (id) => `${id}`;

const itemTemplate = ({ id, title, desc, price }) =>
    `<li id="${getItemId(id)}" class="list-item">
    <img src="images/cheese.png" class="item-image" alt="cheese">
    <div class="cheese-body">
        <h3 class="cheese-title">${title}</h3>
        <p class="cheese-descrition">${desc}</p>
        <p class="cheese-price">${price}</p>
    </div>
</li>`;

export let cheeses = []

export const checkAllInputs = () => {
    if (titleInput.value == "" || descriptionInput.value == "" || priceInput.value == "") {
        return false
    } else {
        return true
    }
}

export const addItemToPage = ({ id, title, desc, price }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, desc, price })
    );

};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
    countTotalPrice(items);
};

export const getInputs = () => {
    return {
        title: titleInput.value,
        desc: descriptionInput.value,
        price: priceInput.value
    };
};

export const countTotalPrice = (items) => {
    let totalPrice = Number(0);
    for (const item of items) {
        totalPrice += Number(item.price);
    }
    document.getElementById("total-price").innerText = totalPrice + '$';
}