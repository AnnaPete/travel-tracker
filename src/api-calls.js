const fetchApi = {
  // GET
  getTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
  },

  getSpecificTraveler(travelerID) {
    return fetch(`http://localhost:3001/api/v1/travelers/${travelerID}`)
      .then(response => response.json())
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
  },

  // POST
  postNewTrip(newTrip) {
    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTrip)
    }
    return fetch('http://localhost:3001/api/v1/trips', postFormat)
      .then(response => response.json())
  },

  postModifyTrip(revisedTrip) {
    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(revisedTrip)
    }
    return fetch('http://localhost:3001/api/v1/updateTrip', postFormat)
      .then(response => response.json())
  },

  // DELETE
  deleteTrip(tripID) {
    const postFormat = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    }
    return fetch(`http://localhost:3001/api/v1/trips/${tripID}`, postFormat)
      .then(response => response.json())
  }
}

export default fetchApi