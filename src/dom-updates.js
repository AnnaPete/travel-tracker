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
}

export default domUpdates