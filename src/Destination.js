class Destination {
  constructor(destination) {
    this.id = destination.id
    this.destination = destination.destination
    this.lodgingCostPerDay = destination.estimatedLodgingCostPerDay
    this.flightCostPerPerson = destination.estimatedFlightCostPerPerson
    this.image = destination.image
    this.alt = destination.alt
  }
}

export default Destination;