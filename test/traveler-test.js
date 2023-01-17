import Traveler from '../src/Traveler';
import Destination from '../src/Destination';
import Trip from '../src/Trip';
import Agent from '../src/Agent';
import tripData from '../src/trip-data';
import destinationData from '../src/destination-data';
import chai from 'chai';
const expect = chai.expect;

describe('Traveler', function() {
  const traveler1 = {id: 1, name: 'Gandalf', type: 'relaxer'};
  let newTraveler
  let agent

  this.beforeEach(() => {
    newTraveler = new Traveler(traveler1)
    agent = new Agent()
    tripData.forEach(trip => {
      const newTrip = new Trip(trip)
      newTraveler.trips.push(newTrip)
    })

    destinationData.forEach(destination => {
      const newDestination = new Destination(destination)
      agent.destinations.push(newDestination)
    })
  });

  it('should be an instantiation of Traveler', function() {
    expect(newTraveler.name).to.equal("Gandalf");
  });

  it('should sort the user trips array by date', function() {
    newTraveler.sortTripsByDate()
    expect(newTraveler.trips[0].date).to.equal('2021/01/28');
  });

  it('should calculate the cost for a single trip', function() {
    const thisTrip = newTraveler.trips[0];
    const tripCost = newTraveler.calculateCostPerTrip(thisTrip, agent.destinations);
    expect(tripCost).to.equal(5290);
  });

  it('should calculate the total spent on trips for a given year', function() {
    const thisYearSpending = newTraveler.calculateSpending(destinationData, '2021');
    expect(thisYearSpending).to.equal('2,398.00');
  });
});
