var chai = require('chai');
global.expect = chai.expect;
chai.Should();
describe('Login Validation', function() {
    it('should display missing credentials', function() {
    browser.url('localhost:3000/');
    
    browser.click('#signin');
    var a = browser.alertText()

    a.should.be.equal('missing credentials');
    browser.alertAccept();
    console.log('Validate empty credentials');
    console.log('LOGINAPP-201 Successful!');

    });
});