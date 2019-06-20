var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const path = require('path'),
  testAPIService = require(path.resolve('./tests/testAPIService')),
  startup = require(path.resolve('./bin/www'));


describe('isServerUp', () => {
  console.log('In once');
  it('should return OK Status', async function () {
    return testAPIService.healthCheck().should.eventually.be.true;
  });
});