import data from "./data.js";
import { displayEvents, createCard, renderCards, showCategoriesInCheckboxes } from './functions.js';
const divCardsIndex = document.getElementById('cardsIndex');
const path = "./pages/";
let cards = displayEvents(data.events, divCardsIndex, createCard, path);
let checkboxesCategories = showCategoriesInCheckboxes(data.events);
const searchInput = document.querySelector('.formSearch > input');
const searchButton = document.querySelector('.formSearch > button');
const checkContainer = document.getElementById('formCategories');
console.log([searchInput]);
// Search function
function filterByName(array, name) {
    let filtersArray = array.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
    return filtersArray;
}
// Function for filtering by categories
function filterByCategories(array) {
    const checkedValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    return checkedValues.length > 0 ? array.filter(e => checkedValues.includes(e.category)) : array;
}
// Function for filters to work together
function ultraFilter(pointer) {
    pointer.preventDefault();
    divCardsIndex.innerHTML = ``
    let filterArrayName = filterByName(data.events, searchInput.value)
    let filterAll = filterByCategories(filterArrayName);
    displayEvents(filterAll, divCardsIndex, createCard, path);
}
searchInput.addEventListener('input', ultraFilter);
searchButton.addEventListener('submit', (pointer) => {
    ultraFilter(pointer)
});
searchButton.addEventListener('onclick', (pointer) => {
    ultraFilter(pointer)
});
checkContainer.addEventListener('change', ultraFilter);