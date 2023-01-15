import './css/styles.css';
import { fetchAllData, updateAPIData, deleteData } from './api-calls';
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
userLoginBtn.addEventListener('click', authenticateUser)
agentLoginBtn.addEventListener('click', authenticateUser)
logoffBtn.addEventListener('click', logOffWebsite)


// FETCH
function getAllData() {
  Promise.all([fetchAllData('travelers'), fetchAllData('trips'), fetchAllData('destinations')])
    .then((response) => {
      allTravelers = response[0]
      allTrips = response[1]
      allDestinations = response[2]
    })
    .catch((error) => console.log(new Error(error)))
}


// INFORMATION DISPLAY
function getTraveler() {
  
}



// FORM FUNCTIONALITY
function resetPlanningForm() {
  dateInput.value = ''
  destinationDropdown.value = 0
  durationDropdown.value = 1
  travelerDropdown.value = 1
  estimatedCostOfTrip.innerText = `Estimated Cost: $0.00`
}

function alphabetizeDataset(dataType, property) {
  dataType.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1
    } else if (a[property] < b[property]) {
      return -1
    }
  })
}

// TRAVELER


// AGENT
function loadAgentInformation() {

}

function updateData(updatedInfo, endpoint) {
  updateAPIData(updatedInfo, endpoint)
  getAllData()
}

function deleteTrip(tripID, endpoint) {
  deleteData(tripID, endpoint)
  getAllData()
}

// LOGIN/LOGOUT 
function authenticateUser(event) {
  if (event.target.id === userLoginBtn &&
      usernameInput.value('traveler') &&
      userPassInput.value === 'travel') {
    displayUserDashboard()
  } else if (event.target.id === agentLoginBtn &&
      agentUserInput.value === 'agency' &&
      agentPassInput.value === 'travel') {
    displayAgentDashboard()
  }
}

function displayUserDashboard() {
  userDashboard.classList.remove('hidden')
  loginPage.classList.add('hidden')
  logoffBtn.classList.remove('hidden')
}

function displayAgentDashboard() {
  agentDashboard.classList.remove('hidden')
  loginPage.classList.add('hidden')
  logoffBtn.classList.remove('hidden')
}

function logOffWebsite() {
  loginPage.classList.remove('hidden')
  userDashboard.classList.add('hidden')
  agentDashboard.classList.add('hidden')
  logoffBtn.classList.add('hidden')
}

// ERROR 
function displayErrorMessage(error) {
  const errorMessage = document.querySelector('#server-error')
  if (error) {
    console.log('ERROR MESSAGE: Unable to access server information at this time. Please check that the server is running and refresh the page.')
    errorMessage.style.display = 'inline-block'
  } else {
    errorMessage.style.display = 'none'
  }
}
