import fetchApi from './api-calls';
import domUpdates from './dom-updates';

import './css/styles.css';
import './images/airplane-logo-png-5.png';

import Traveler from './Traveler';
import Trip from './Trip';

// QUERY SELECTORS
// login
const travelerLoginButton = document.querySelector('#button-traveler')
const logoffButton = document.querySelector('#button-logoff')
// misc
const addToTripsButton = document.querySelector('#button-add-trip')
const travelerDashboard = document.querySelector('.dashboard-user')
const loginView = document.querySelector('.login')
const travelerUsername = document.querySelector('#name-traveler')
const destinationDropdown = document.querySelector('#planning-destination')
const dateInput = document.querySelector('#planning-date')
const estimatedCostOfTrip = document.querySelector('#planning-cost')
const durationDropdown = document.querySelector('#planning-duration')
const travelersDropdown = document.querySelector('#planning-travelers')
const tripsDisplay = document.querySelector('#trips-all')
const totalSpentPresent = document.querySelector('#spending-present-amount')

// GLOBAL VARIABLES
let allTrips
let allDestinations
let currentTraveler
let currentTravelerID = 1

// EVENT LISTENERS
travelerLoginButton.addEventListener('click', authenticateUser)
logoffButton.addEventListener('click', logOffWebsite)
addToTripsButton.addEventListener('click', addToPendingTrips)
dateInput.addEventListener('change', validateForm)
destinationDropdown.addEventListener('change', validateForm)
travelersDropdown.addEventListener('change', validateForm)
durationDropdown.addEventListener('change', validateForm)
// accessibility branch only
window.addEventListener('load', loadTravelerDashboard)

function displayTravelerTrips() {
  let singleTravelerResponse = fetchApi.getSpecificTraveler(currentTravelerID)
  Promise.all([tripsResponse, destinationsResponse, singleTravelerResponse])
  .then(responses => {
    allTrips = responses[0].trips
    allDestinations= responses[1].destinations
    currentTraveler = new Traveler(responses[2])
    const userTrips = findTravelerTrips(currentTravelerID)
    tripsDisplay.innerHTML = ''
    userTrips.forEach(trip => {
      const foundDestination = allDestinations.find(destination => {
        if (destination.id === trip.destinationID) {
          return destination
        }
      })
      tripsDisplay.innerHTML += `<li>Where: ${foundDestination.destination} When: ${trip.date}</li>`
    })
    totalSpentPresent.innerText = currentTraveler.calculateSpending(allDestinations)
    domUpdates.addDestinationsToDropdown(allDestinations, destinationDropdown)
    domUpdates.addNumbersToDropdowns(travelersDropdown)
    domUpdates.addNumbersToDropdowns(durationDropdown)
  })
  .catch(error => {
    const errorMessage = document.querySelector('#server-error')
    console.log('ERROR MESSAGE: ', error)
    })
 
}

// FETCH SERVER DATA
let travelersResponse = fetchApi.getTravelers()
let tripsResponse = fetchApi.getAllTrips()
let destinationsResponse = fetchApi.getAllDestinations()


// USER INFORMATION POPULATION
function authenticateUser(event) {
  event.preventDefault()
  const travelerPassword = document.querySelector('#pass-traveler')

  if (travelerUsername.value.includes('traveler') &&
      travelerPassword.value === 'travel') {
    const getID = travelerUsername.value.split('traveler')[1]
    currentTravelerID = parseInt(getID)
    loadTravelerDashboard()
  }
}

function loadTravelerDashboard() {
  logOnWebsite()
  displayTravelerTrips()
  resetPlanningForm()
}

function findTravelerTrips(currentTravelerID) {
  const travelerTrips = allTrips.filter(trip => {
    return trip.userID === currentTravelerID
  })
  currentTraveler.trips = travelerTrips.map(trip => {
    const newTrip = new Trip(trip)
    return newTrip
  })  
  return currentTraveler.trips
}

function addToPendingTrips(event) {
  event.preventDefault()
  createNewTrip()
  resetPlanningForm()
}

function createNewTrip() {
  const tripInformation = {
    id: allTrips.length + 1,
    userID: Number(currentTraveler.id),
    destinationID: Number(destinationDropdown.value),
    travelers: Number(travelersDropdown.value),
    date: formatDateForPost(dateInput.value),
    duration: Number(durationDropdown.value),
    status: 'pending',
    suggestedActivities: []
  }
  tripsDisplay.innerHTML = ''
  fetchApi.postNewTrip(tripInformation)
    .then(data => {
      console.log('data: ', data)
      travelersResponse = fetchApi.getSpecificTraveler(currentTravelerID)
      tripsResponse = fetchApi.getAllTrips()
      return Promise.all([travelersResponse, tripsResponse])
        .then(responses => {
          currentTraveler = new Traveler(responses[0])
          allTrips = responses[1].trips
          const userTrips = findTravelerTrips(currentTravelerID)
          userTrips.forEach(trip => {
            const foundDestination = allDestinations.find(destination => {
              if (destination.id === trip.destinationID) {
                return destination
              }
            })
            tripsDisplay.innerHTML += `<li>Where: ${foundDestination.destination} When: ${trip.date}</li>`
          })
        })
    })
    .catch(displayErrorMessage)
}

// PLANNING FORM INFORMATION
function resetPlanningForm() {
  dateInput.value = ''
  destinationDropdown.value = 0
  durationDropdown.value = 1
  travelersDropdown.value = 1
  estimatedCostOfTrip.innerText = `Estimated Cost: $0.00`
}

function updateEstimatedCost() {
  const destination = findDestination(Number(destinationDropdown.value))
  if (!destination) return;
  const numDays = durationDropdown.value
  const numPeople = travelersDropdown.value
  const lodgingCost = destination.estimatedLodgingCostPerDay * numDays * numPeople
  const flightCost = destination.estimatedFlightCostPerPerson * numPeople
  const price = ((lodgingCost + flightCost) * 1.1).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  estimatedCostOfTrip.innerText = `Estimated Cost: $${price}`
}

function validateForm() {
  const selectedDate = new Date(dateInput.value)
  const dateDifference = determineDateDifference(selectedDate)
  if (destinationDropdown.value > 0 && dateDifference > 0) {
    addToTripsButton.disabled = false
  } else {
    addToTripsButton.disabled = true
  }
  updateEstimatedCost()
}

// GENERAL FUNCTIONALITY
function findDestination(destinationID) {
  return allDestinations.find(dest => dest.id === destinationID)
}

function determineDateDifference(dateInput) {
  const today = new Date()
  const timeDifference = Date.parse(dateInput) - today
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
}
function formatDateForPost(dateInput) {
  const dateParts = dateInput.split('-')
  return dateParts.join('/')
}

// TOGGLE BETWEEN LOGIN AND DASHBOARD
function logOnWebsite() {
  travelerDashboard.classList.remove('hidden')
  loginView.classList.add('hidden')
  logoffButton.classList.remove('hidden')
}

function logOffWebsite(event) {
  event.preventDefault()
  loginView.classList.remove('hidden')
  travelerDashboard.classList.add('hidden')
  logoffButton.classList.add('hidden')
}

function displayErrorMessage(error) {
  const errorMessage = document.querySelector('#server-error')
  if (error) {
    console.log('ERROR MESSAGE: Unable to access server information at this time. Please check that the server is running and refresh the page.')
    errorMessage.innerText = 'Unable to access server information at this time. Please check that the server is running and refresh the page.'
  } else {
    errorMessage.innerText = ''
  }
}
