var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const path = require('path'),
  testAPIService = require(path.resolve('./tests/testAPIService')),
  startup = require(path.resolve('./bin/www'));

describe('Is server running check', () => {
  it('should return OK Status', async () => {
    return testAPIService.healthCheck().should.eventually.be.true;
  });
});

describe('Metadata scraping function check', () => {
  it('should have property images', async function() {
    this.timeout(15000);
    return testAPIService.metadataTest().should.eventually.have.property('images').to.have.lengthOf(1);
  });
});

describe('Metadata scraping function check', () => {
  it('should have property images', async function() {
    this.timeout(15000);
    return testAPIService.allOGPropsPresent().should.eventually.be.true;
  });
});
