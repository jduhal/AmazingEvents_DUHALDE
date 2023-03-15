import data from "./amazing.js";
import { displayEvents, createCard, renderCards, showCategoriesInCheckboxes } from './functions.js';
const divCardsPastEvents = document.getElementById('cardsPastEvents');
const pastEvents = data.events.filter((event) => {
    return event.date < data.currentDate;});
let cards = displayEvents(pastEvents, divCardsPastEvents, createCard);
let checkboxesCategories = showCategoriesInCheckboxes(pastEvents);
const searchInput = document.querySelector('.formSearch > input');
const searchButton = document.querySelector('.formSearch > button');
const checkContainer = document.getElementById('formCategories');
//Search functions
function filterByName(array, name){
    let filtersArray = array.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
    return filtersArray;
}
// Function for filtering by categories
function filterByCategories(array){
    const checkedValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    return checkedValues.length > 0 ? array.filter(e => checkedValues.includes(e.category)) : array;
}
//Function for filters to work together
function ultraFilter(){
    divCardsPastEvents.innerHTML=``
    let filterArrayName = filterByName(pastEvents, searchInput.value)
    let filterAll = filterByCategories(filterArrayName);
    displayEvents(filterAll, divCardsPastEvents, createCard);
}
searchInput.addEventListener('input', ultraFilter);
searchButton.addEventListener('input', ultraFilter);
checkContainer.addEventListener('change', ultraFilter);