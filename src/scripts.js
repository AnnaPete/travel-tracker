import './css/styles.css';
import { fetchAllData, updateAPIData } from './api-calls';
import Traveler from './Traveler';
import Agent from './Agent';
import Trip from './Trip';
import Destination from './Destination';

// QUERY SELECTORS
// login
const logoffBtn = document.querySelector('#button-logoff');
const usernameInput = document.querySelector('#name-traveler');
const userPassInput = document.querySelector('#pass-traveler');
const userLoginBtn = document.querySelector('#button-traveler');
const loginPage = document.querySelector('.login-page');
const agentUserInput = document.querySelector('#name-agent');
const agentPassInput = document.querySelector('#pass-agent');
const agentLoginBtn = document.querySelector('#button-agent');
// user dashboard
const userDashboard = document.querySelector('.dashboard-user');
const lastYearSpending = document.querySelector('#spending-previous-amount');
const thisYearSpending = document.querySelector('#spending-present-amount');
const newTripForm = document.querySelector('#planning-user');
const dateInput = document.querySelector('#planning-date');
const destinationInput = document.querySelector('#input-destination');
const daysInput = document.querySelector('#input-duration');
const  travelersInput = document.querySelector('#planning-travelers');
const planningCost = document.querySelector('#planning-cost');
const addTripBtn = document.querySelector('#button-add-trip');
const tripsDashboard = document.querySelector('#trip-user');
// agent dashboard
const agentDashboard = document.querySelector('.dashboard-agent');
const agentIncome = document.querySelector('welcome-income');
const todaysTravelers = document.querySelector('#welcome-trips');
const  travelerDropdown = document.querySelector('#traveler-dropdown');
const userCard = document.querySelector('.user-card');
const approveBtn = document.querySelector('.button-approve');
const deleteBtn = document.querySelector('.button-delete');
const travelerSearchInput = document.querySelector('#traveler-search');
const travelerCard = document.querySelector('.trip-card');

// GLOBAL VARIABLES
const currentAgent = new Agent();
let currentTraveler
let allTravelers
let allDestinations
let allTrips

// EVENT LISTENERS
window.addEventListener('load', getAllData)

// FETCH
// get
function getAllData() {
  Promise.all([fetchAllData('travelers'), fetchAllData('trips'), fetchAllData('destinations')])
    .then((response) => {
      allTravelers = response[0]
      allTrips = response[1]
      allDestinations = response[2]
    })
    .catch((error) => console.log(new Error(error)))
}

// post
function updateData(updatedInfo, endpoint) {
  updateAPIData(updatedInfo, endpoint)
  getAllData()
}

// INFORMATION DISPLAY
console.log(getAllData())

// FORM FUNCTIONALITY


// LOGIN/LOGOUT 


// ERROR 

