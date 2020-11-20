const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("decription-input");
const priceInput = document.getElementById("price-input")
const itemsContainer = document.getElementById("items-container");


const getItemId = (id) => `${id}`;

const itemTemplate = ({ id, title, description, price }) => `
<li id="${getItemId(id)}" class="list-item">
    <img src="images/cheese.png" class="item-image" alt="cheese">
    <div class="cheese-body">
        <h3 class="cheese-title">${title}</h3>
        <p class="cheese-descrition">${description}</p>
        <p class="cheese-price">${price}</p>
    </div>
    <div class="li-buttons">
        <button id="delete_${id}" type="button" class="btn delete">Delete </button>
        <button id="edit_${id}" type="button" class="btn edit">Edit </button>
    </div>
</li>`;


export const checkAllInputs = () => {
    if (titleInput.value == "" || descriptionInput.value == "" || priceInput.value == "") {
        return false
    } else {
        return true
    }
}

export const addItemToPage = ({ id, title, description, price }, editCheese, removeCheese) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, description, price })
    );

    const deleteButton = document.getElementById("delete_" + `${id}`);
    const editButton = document.getElementById("edit_" + `${id}`);
    editButton.addEventListener("click", editCheese);
    deleteButton.addEventListener("click", removeCheese);
};

export const renderItemsList = (items, editCheese, removeCheese) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item, editCheese, removeCheese);
    }
    countTotalPrice(items);
};

export const getInputs = () => {
    return {
        title: titleInput.value,
        description: descriptionInput.value,
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

export const clearInputs = () => {
    titleInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
};