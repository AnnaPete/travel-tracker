import destinationData from '../src/destination-data';
import chai from 'chai';
const expect = chai.expect;

describe('Destination', function() {

  it('should have an id', function() {
    const destination1 = destinationData[0]

    expect(destination1.id).to.equal(14);
  });

  it('should have a destination', function() {
    const destination2 = destinationData[1]

    expect(destination2.destination).to.deep.equal("Rome, Italy");
  });

  it('should have a lodging cost per day', function() {
     const destination3 = destinationData[2]
     
    expect(destination3.estimatedLodgingCostPerDay).to.equal(175);
  });

  it('should have a flight cost per person', function() {
    const destination4 = destinationData[3]

    expect(destination4.estimatedFlightCostPerPerson).to.equal(1100);
  });

  it('should have an image', function() {
    const destination5 = destinationData[4]

    expect(destination5.image).to.deep.equal("https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  });

    it('should have an image alt description', function() {
    const destination6 = destinationData[5]

    expect(destination6.alt).to.deep.equal("aerial photography of rocky mountain under cloudy sky");
  });
});
