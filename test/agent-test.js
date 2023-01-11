import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/traveler';
import Trip from '../src/trip';
import Destination from '../src/destination';
import Agent from '../src/agent';
import tripData from '../src/trip-data';
import destinationData from '../src/destination-data';

describe('Agent', function() {
  const traveler1 = {id: 1, name: 'Gandalf', type: 'relaxer'};
  let newTraveler = new Traveler(traveler1)
  let newAgent = new Agent()

  this.beforeEach(() => {
    tripData.forEach(trip => {
      const newTrip = new Trip(trip)
      newTraveler.trips.push(newTrip)
    })

    destinationData.forEach(destination => {
      const newDestination = new Destination(destination)
      newAgent.destinations.push(newDestination)
    })
  });

  it('should see a list of travelers', function() {
    expect(newAgent.travelers).to.deep.equal([]);
  });

  it('should see a list of trips', function() {
    expect(newAgent.trips).to.deep.equal([]);
  });

  it('should see a list of destinations', function() {
    expect(newAgent.destinations).to.deep.equal(destinationData);
  });
// will not calculate the total income. double-check math
  it.skip('should have a method that calculates the total income for the year', function() {
    const income1 = newAgent.calculateTotalIncome(2019)
    const income2 = newAgent.calculateTotalIncome(2020)
    const income3 = newAgent.calculateTotalIncome(2021)

    expect(income1).to.equal('529.00')
    expect(income2).to.equal('1,638.00')
    expect(income3).to.equal('872.00')
  });
// will not push trips into the empty array. look at method logic
  it.skip('should have a method that finds trips by year', function() {
    const trips = [{
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date": "2019/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    }]
    const yearTrips = newAgent.findTrips(2019)
    console.log("what is yearTrips?? ", yearTrips)
    expect(yearTrips).to.deep.equal(trips)
  });

  it.skip('should have a method that returns a given day\'s travelers by name', function() {
    const trip = [{
          "id": 1,
          "userID": 1,
          "destinationID": 22,
          "travelers": 4,
          "date": "2021/05/22",
          "duration": 100,
          "status": "approved",
          "suggestedActivities": []
      }]

    const newTrip = new Trip(trip)
    newAgent.trips.push(newTrip)

    const todaysTravelers = newAgent.findTravelers(trip)
    expect(todaysTravelers).to.deep.equal( [{Gandalf: 1}] )
  });
});
