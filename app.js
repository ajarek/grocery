"use strict";
//constants
const input = document.querySelector('input');
const submit = document.querySelector('input[type="submit"]');
const row = document.querySelector('.row');
const info = document.querySelector('.info');
const displayClear = document.querySelector('.clear-items');
//functions 
function createItem(e) {
    e.preventDefault();
    const commodity = input.value;
    if (commodity) {
        info.style.display = 'none';
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = ` <div class="wrap">
    <p>${commodity.split('')[0].toUpperCase() + commodity.slice(1).toLowerCase()}</p>
</div>
<div class="wrap">
    <button id="edit">📝</button>
    <button id="del">🗑️</button>
</div>`;
        row.appendChild(div);
        input.value = '';
        displayClearButton();
    }
    else {
        info.style.display = 'block';
    }
}
function displayClearButton() {
    const items = document.querySelectorAll('.item');
    if (items.length > 0) {
        displayClear.style.display = 'block';
    }
    else {
        displayClear.style.display = 'none';
    }
}
function clearAllItems() {
    row.innerHTML = '';
    displayClear.style.display = 'none';
}
function operationButtons(e) {
    var _a;
    const target = e.target;
    const itemId = (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
    if (target && target.id === 'del') {
        itemId.remove();
        displayClearButton();
    }
    else if (target && target.id === 'edit') {
        const input = document.querySelector('input');
        const paragraph = itemId.querySelector('p');
        input.value = `${paragraph.textContent}`;
        itemId.remove();
        displayClearButton();
    }
}
//events
submit.addEventListener('click', createItem);
displayClear.addEventListener('click', clearAllItems);
row.addEventListener('click', operationButtons);
