class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType
    this.trips = []
  }
  
  sortTripsByDate() {
    this.trips.sort((a, b) => {
      if (Date.parse(a.date) < Date.parse(b.date)) {
        return 1
      } else if (Date.parse(a.date) > Date.parse(b.date)) {
        return -1
      }
    })
  }

  calculateSpending(destinations, year) {
    let totalCost = 0
    this.trips.forEach(trip => {
      const tripDate = new Date(trip.date)
      const tripYear = tripDate.getFullYear()
      if (tripYear === year && trip.status !== 'pending') {
        const totalPerTrip = this.calculateCostPerTrip(trip, destinations)
        totalCost += totalPerTrip
      } else if (!year && trip.status !== 'pending') {
        const totalPerTrip = this.calculateCostPerTrip(trip, destinations)
        totalCost += totalPerTrip
      }
    })
    return (totalCost * 1.1).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  calculateCostPerTrip(trip, destinations) {
    const place = destinations.find(dest => dest.id === trip.destinationID)
    const totalLodging = place.lodgingCostPerDay * trip.duration
    const totalFlight = place.flightCostPerPerson
    return totalLodging + totalFlight
  }
}

export default Traveler;