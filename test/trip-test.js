import tripData from '../src/trip-data';
import destinationData from '../src/destination-data';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip'
import Destination from '../src/Destination';
import chai from 'chai';
const expect = chai.expect;

describe('Trip', function() {
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

  it.skip('should have an id', function() {
    expect().to.equal();
  });

  it.skip('should have a user id', function() {
    expect().to.equal();
  });

  it.skip('should have a destination id', function() {
    expect().to.equal();
  });

  it.skip('should have a list of travelers', function() {
    expect().to.equal();
  });

  it.skip('should have a date', function() {
    expect().to.equal();
  });

  it.skip('should have a duration', function() {
    expect().to.equal();
  });

  it.skip('should have a status', function() {
    expect().to.equal();
  });

  it.skip('should have a list of suggested activities', function() {
    expect().to.equal();
  });

  it.skip('should have a method to format the trip date', function() {
    expect().to.equal();
  });

  it.skip('should have a method to determine the trip status', function() {
    expect().to.equal();
  });
});
