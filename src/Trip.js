class Trip {
  constructor(trip) {
    this.id = trip.id
    this.userID = trip.userID
    this.destinationID = trip.destinationID
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status
    this.suggestedActivities = trip.suggestedActivities
  }

  // formatTripDate() {
  //   
  // }

  checkTripStatus() {
    if (this.status === 'pending') {
      return 'pending'
    } else if (this.status === 'approved') {
      return 'approved'
    }
  }
}

export default Trip;