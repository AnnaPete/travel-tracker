class Agent {
  constructor() {
    this.travelers = []
    this.trips = []
    this.destinations = []
  }

  findTrips(year) {
    let yearTrips = []
    this.travelers.forEach(traveler => {
      traveler.trips.forEach(trip => {
        if (trip.date.includes(`${year}`) && trip.status !== 'pending') {
          yearTrips.push(trip)
        }
      })
    })
    return yearTrips
  }

  findTravelers(todaysTrips) {
    const todaysTravelers = todaysTrips.reduce((acc, curr) => {
      const currentTraveler = this.travelers.find(traveler => {
        return traveler.id === curr.userID
      })
      acc.push( {[currentTraveler.name]: currentTraveler.id} )
      return acc
    }, [])
    return todaysTravelers
  }
  
  calculateTotalIncome(year) {
    let totalIncome = 0
    const yearTrips = this.findTrips(year)
    yearTrips.forEach(trip => {
      const location = this.destinations.find(place => place.id === trip.destinationID)
      const lodgingIncome = trip.travelers * trip.duration * location.estimatedLodgingCostPerDay
      const flightIncome = trip.travelers * location.estimatedFlightCostPerPerson
      totalIncome += (lodgingIncome + flightIncome)
    })
    return (totalIncome * 0.1).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }
}

export default Agent;