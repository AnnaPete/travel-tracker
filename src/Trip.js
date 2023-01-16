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

  checkTripStatus() {
    if (this.status === 'pending') {
      return 'pending'
    } else if (daysPassed > 0 && daysPassed <= 30) {
      return 'upcoming'
    } else if (Math.abs(daysPassed) <= this.duration) {
      return 'present'
    }
    return 'previous'
  }
}

export default Trip;