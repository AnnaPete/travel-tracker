import Traveler from './Traveler'

const travelerCards = document.querySelector('#traveler-cards')
const pendingCards = document.querySelector('#pending-cards')
const todaysTrips = document.querySelector('#welcome-trips')
const trips = {
  Template: document.querySelector('#trip-template'),
  Previous: document.querySelector('#trip-previous'),
  Present: document.querySelector('#trip-present'),
  Upcoming: document.querySelector('#trip-upcoming'),
  Pending: document.querySelector('#trip-pending')
}

const domUpdates = {

  // USER DASHBOARD
  populateTravelerGreeting(currentTraveler) {
    const welcomeMessage = document.querySelector('#welcome-message')
    const travelerNames = currentTraveler.name.split(' ')
    const travelerFirstName = travelerNames[0]
    welcomeMessage.innerText = `Welcome ${travelerFirstName}!`
  },

  displayDestinationInformation(trip, place, daysPassed) {
    const tripCard = trips.Template.content.cloneNode(true)
    tripCard.querySelector('.card-destination').innerText = place.destination
    tripCard.querySelector('.card-image').src = place.image
    tripCard.querySelector('.card-image').alt = place.alt
    tripCard.querySelector('.card-date').innerText = `Start Date: ${trip.date}`
    tripCard.querySelector('.card-duration').innerText = `Duration: ${trip.duration} Days`
    tripCard.querySelector('.card-travelers').innerText = `Travelers: ${trip.travelers} Adults`
    tripCard.querySelector('.card-lodging').innerText = `Lodging Cost Per Day: $${place.lodgingCostPerDay}`
    tripCard.querySelector('.card-flight').innerText = `Flight Cost: $${place.flightCostPerPerson}`
    const status = trip.determineTripStatus(daysPassed)
    trips[status].appendChild(tripCard)
  },

  addCostToProfile(yearSpent, totalCost) {
    yearSpent.innerText = `$${totalCost}`
  },

  addDestinationsToDropdown(destinations, dropdown) {
    destinations.forEach(location => {
      const newOption = document.createElement('option')
      newOption.value = location.id
      newOption.innerText = location.destination
      dropdown.appendChild(newOption)
    })
  },

  addNumbersToDropdowns(dropdown) {
    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    possibleNumbers.forEach(number => {
      const newOption = document.createElement('option')
      newOption.value = number
      newOption.innerText = number
      dropdown.appendChild(newOption)
    })
  },

  // AGENT DASHBOARD
  displayAgentAnnualIncome(presentSpent) {
    const presentIncome = document.querySelector('#welcome-income')
    presentIncome.innerText = `$${presentSpent}`
  },

  displayTodaysTravelers(todaysTravelers) {
    this.clearTripList()
    todaysTravelers.forEach(traveler => {
      const newTraveler = document.createElement('li')
      newTraveler.innerText = `${Object.keys(traveler)} (#${Object.values(traveler)})`
      todaysTrips.appendChild(newTraveler)
    })
  },

  displayTravelerInformation(traveler, destinations) {
    const travelerTemplate = document.querySelector('#traveler-template')
    const newTravelerCard = travelerTemplate.content.cloneNode(true)
    const travelerName = `${traveler.name} (#${traveler.id})`
    const travelerSpending = traveler.calculateSpending(destinations)
    newTravelerCard.querySelector('article').id = traveler.id
    newTravelerCard.querySelector('#traveler-name').innerText = travelerName
    newTravelerCard.querySelector('#traveler-spent').innerText = travelerSpending
    traveler.trips.forEach(trip => {
      const location = this.findDestination(destinations, trip)
      this.buildTableElements(trip, location, newTravelerCard)
    })
    travelerCards.appendChild(newTravelerCard)
  },

  displayPendingTrips(traveler, destinations) {
    const pendingTrips = traveler.trips.filter(trip => trip.status === 'pending')
    pendingTrips.forEach(trip => {
      const pendingTemplate = document.querySelector('#pending-template')
      const location = this.findDestination(destinations, trip)
      const newCard = pendingTemplate.content.cloneNode(true)
      const travelerName = `${traveler.name} (#${traveler.id})`
      const tripInfo = `${trip.date} (${trip.duration} days)`
      newCard.querySelector('.pending-name').innerText = travelerName
      newCard.querySelector('.pending-location').innerText = location.destination
      newCard.querySelector('.pending-date').innerText = tripInfo
      newCard.querySelector('.button-approve').setAttribute('tripID', trip.id)
      newCard.querySelector('.button-delete').setAttribute('tripID', trip.id)
      pendingCards.appendChild(newCard)
    })
  },

  buildTableElements(trip, location, card) {
    const travelerLocations = card.querySelector('#traveler-locations')
    const newRow = document.createElement('tr')
    const locationCell = document.createElement('td')
    const statusCell = document.createElement('td')
    locationCell.innerText = location.destination
    statusCell.innerText = trip.status
    travelerLocations.appendChild(newRow)
    newRow.appendChild(locationCell)
    newRow.appendChild(statusCell)
  },

  // HELPER FUNCTIONS
  findDestination(destinations, trip) {
    return destinations.find(place => place.id === trip.destinationID)
  },

  clearTripDisplays(status) {
    trips[status].querySelectorAll('article').forEach(item => item.remove())
  },

  clearTripList() {
    todaysTrips.querySelectorAll('li').forEach(li => li.remove())
  },

  clearTravelerCardDisplays() {
    travelerCards.querySelectorAll('article').forEach(item => item.remove())
    pendingCards.querySelectorAll('article').forEach(item => item.remove())
  }

}

export default domUpdates