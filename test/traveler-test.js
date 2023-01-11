import Traveler from '../src/Traveler';
import Destination from '../src/Destination';
import Trip from '../src/Trip';
import Agent from '../src/Agent';
import tripData from '../src/trip-data';
import destinationData from '../src/destination-data';
import chai from 'chai';
const expect = chai.expect;

describe('Traveler', function() {
  this.beforeEach(() => {
    const traveler1 = {id: 1, name: 'Gandalf', type: 'relaxer'}
    let newTraveler = new Traveler(traveler1)

    tripData.forEach(trip => {
      const newTrip = new Trip(trip)
      newTraveler.trips.push(newTrip)
    })

    // destinationData.forEach(destination => {
    //   const newDestination = new Destination(destination)
    //   agent.destinations.push(newDestination)
    // })
  });

  it.skip('should be an instantiation of Traveler', function() {
    expect().to.equal();
  });

  it.skip('should sort the user trips array by date', function() {
    expect().to.equal();
  });

  it.skip('should calculate the cost for a single trip', function() {
    expect().to.equal();
  });

  it.skip('should calculate the total spent on trips for a given year', function() {
    expect().to.equal();
  });
});
