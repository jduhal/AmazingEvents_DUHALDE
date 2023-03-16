import data from "./amazing.js"
import { createDetailsCard } from "./functions.js";
const queryString = location.search;
const param = new URLSearchParams(queryString);
const eventId = param.get('id');
const event = data.events.find(event => event._id == eventId);
let detailsContainer = document.getElementById('cardDetails');
createDetailsCard(event,detailsContainer);