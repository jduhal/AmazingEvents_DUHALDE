// Function for event categories
const uniqueCategories = (events) => {
    return events.reduce((uniq, all) => {
        if (!uniq.includes(all.category)) {
            uniq.push(all.category);
        }
        return uniq;
    }, []);
};
  // Function to create the fragment with the checkboxes according to each category
const createCategoryCheckboxes = (array) => {
    const fragmentForm = document.createDocumentFragment();
    const categories = uniqueCategories(array);
    categories.map(category => {
        const div = document.createElement('div');
        div.classList="d-flex flex-wrap form-check form-switch";
        div.innerHTML=` 
        <label class="d-inline-flex my-2 mx-2">
        <input class="form-check-input me-3" value="${category}" 
        name="categories" role="switch" for="${category}" id="${category}" type="checkbox">${category}
        </label>`;
    fragmentForm.appendChild(div);
    });
    return fragmentForm;
}
// Function that shows the checkboxes in the form
const showCategoriesInCheckboxes = (array) => {
    const formCategories = document.getElementsByClassName('formCategories')[0];
    const fragmentForm = createCategoryCheckboxes(array);
    let showCategories = formCategories.appendChild(fragmentForm);
}
// Function to create event cards
function createCard(event, path) {
    let div = document.createElement('div');
    div.classList='card mx-2 my-2';
    div.innerHTML=`
        <img src="${event.image}" class="card-img-top" alt="${event.category}">
        <div class="card-body text-center">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between">
                <p class="pt-2">Price: $${event.price}</p>
                <a href="${path}details.html?id=${event._id}" class="btn btn-nav align-self-center go">Go to Details</a>
            </div>
        </div>`;
    return div;
}
// Function to loop through events
function renderCards(elements, container, renderFunction, path="./") {
    let fragmento = document.createDocumentFragment();
    elements.forEach(element => {
        const card = renderFunction(element,path);
        fragmento.appendChild(card);
    });
    container.appendChild(fragmento);
}
// Function not found events
function displayEvents(events, container, renderFunction, path) {
    if (events.length == 0) {
        container.innerHTML= `<h2>No results found</h2>`
    }
    renderCards(events, container, renderFunction, path);
}
// Function that creates the Details Cards according to the ID
function createDetailsCard(event, container) {
    let div = document.createElement('div');
    div.classList='row g-0';
    div.innerHTML=`
    <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img src="${event.image}" id="cardImg" class="img-fluid borderRadius" alt="${event.name}">
    </div>
    <div class="col-md-6">
        <div class="card-body">
            <dl class="card-text">
                <dt>Name</dt>
                <dd>${event.name}</dd>
                <dt>Date</dt>
                <dd>${event.date}</dd>
                <dt>Description</dt>
                <dd>${event.description}</dd>
                <dt>Category</dt>
                <dd>${event.category}</dd>
                <dt>Place</dt>
                <dd>${event.place}</dd>
                <dt>Capacity</dt>
                <dd>${event.capacity}</dd>
                <dt>${event.assistance ? "Asistence" : "Estimate"}</dt>
                <dd>${event.assistance ? event.assistance : event.estimate}</dd>
                <dt>Price</dt>
                <dd>${event.price}</dd>
            </dl>
            <div class="d-flex justify-content-end">
                <a href="../index.html" class="btn btn-details align-self-center go">Back to Home</a>
            </div>
        </div>
    </div>`;
    return container.appendChild(div)
}
export {createCard, renderCards, displayEvents, showCategoriesInCheckboxes, createDetailsCard,};