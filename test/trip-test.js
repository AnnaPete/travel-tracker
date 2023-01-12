import tripData from '../src/trip-data';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import chai from 'chai';
const expect = chai.expect;

describe('Trip', function() {
  const trip1 = tripData[0]
  const trip2 = tripData[1]
  const trip3 = tripData[2]
  const trip4 = tripData[3]
  const trip5 = tripData[4]
  const trip6 = tripData[5]
  const trip7 = new Trip({
    id: 132,
    userID: 42,
    destinationID: 30,
    travelers: 5,
    date: "2020/09/07",
    duration: 5,
    status: "pending",
    suggestedActivities: [ ]
  })

  it('should have an id', function() {
    expect(trip1.id).to.equal(1);
  });

  it('should have a user id', function() {
    expect(trip2.userID).to.equal(35);
  });

  it('should have a destination id', function() {
    expect(trip3.destinationID).to.equal(22);
  });

  it('should have a number of travelers', function() {
    expect(trip4.travelers).to.equal(2);
  });

  it('should have a date', function() {
    expect(trip5.date).to.deep.equal("2020/04/30");
  });

  it('should have a duration in days', function() {
    expect(trip6.duration).to.equal(9);
  });

  it('should have a status', function() {
    expect(trip1.status).to.deep.equal("approved");
    expect(trip2.status).to.deep.equal("pending");
  });

  it('should have a list of suggested activities', function() {
    expect(trip2.suggestedActivities).to.deep.equal([]);
  });

  it('should have a method to determine the trip status', function() {
    trip7.checkTripStatus()
    expect(trip4.status).to.deep.equal("approved");
    expect(trip7.checkTripStatus()).to.deep.equal("pending");
  });
});
