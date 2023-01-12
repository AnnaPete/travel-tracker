import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
import Agent from '../src/Agent';
import tripData from '../src/trip-data';
import destinationData from '../src/destination-data';

describe('Agent', function() {
  const traveler1 = {id: 1, name: 'Gandalf', travelerType: 'relaxer'};
  let newTraveler
  let newAgent

  this.beforeEach(() => {
    newTraveler = new Traveler(traveler1)
    newAgent = new Agent()
    newAgent.travelers.push(newTraveler)

    tripData.forEach(trip => {
      const newTrip = new Trip(trip)
      newTraveler.trips.push(newTrip)
      newAgent.trips.push(newTrip)
    })

    destinationData.forEach(destination => {
      const newDestination = new Destination(destination)
      newAgent.destinations.push(newDestination)
    })
  });

  it('should see a list of travelers', function() {
    expect(newAgent.travelers).to.deep.equal([
      {
        "id": 1,
        "name": "Gandalf",
        "trips": [
          {
            "date": "2019/09/16",
            "destinationID": 49,
            "duration": 8,
            "id": 1,
            "status": "approved",
            "suggestedActivities": [],
            "travelers": 1,
            "userID": 44
          },
          {
            "date": "2021/01/21",
            "destinationID": 25,
            "duration": 18,
            "id": 1,
            "status": "pending",
            "suggestedActivities": [],
            "travelers": 5,
            "userID": 35
          },
          {
            "date": "2021/01/28",
            "destinationID": 22,
            "duration": 17,
            "id": 1,
            "status": "approved",
            "suggestedActivities": [],
            "travelers": 4,
            "userID": 3
          },
          {
            "date": "2020/02/25",
            "destinationID": 14,
            "duration": 10,
            "id": 1,
            "status": "approved",
            "suggestedActivities": [],
            "travelers": 2,
            "userID": 43
          },
          {
            "date": "2020/04/30",
            "destinationID": 29,
            "duration": 18,
            "id": 1,
            "status": "approved",
            "suggestedActivities": [],
            "travelers": 3,
            "userID": 42
          },
          {
            "date": "2020/06/29",
            "destinationID": 35,
            "duration": 9,
            "id": 1,
            "status": "approved",
            "suggestedActivities": [],
            "travelers": 3,
            "userID": 29
          }
        ],
        "type": "relaxer"
      }
    ]);
  });

  it('should see a list of trips', function() {
    expect(newAgent.trips).to.deep.equal(tripData);
  });

  it('should see a list of destinations', function() {
    expect(newAgent.destinations).to.deep.equal(destinationData);
  });

  it('should have a method that calculates the total income for the year', function() {
    const income1 = newAgent.calculateTotalIncome(2019)
    const income2 = newAgent.calculateTotalIncome(2020)
    const income3 = newAgent.calculateTotalIncome(2021)

    expect(income1).to.equal('529.00')
    expect(income2).to.equal('1,638.00')
    expect(income3).to.equal('872.00')
  });

  it('should have a method that finds trips by year', function() {
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
    let trips19 = newAgent.findTrips(2019)
 
    expect(trips19).to.deep.equal(trips)
  });

  it('should have a method that returns a given day\'s travelers by name', function() {
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
