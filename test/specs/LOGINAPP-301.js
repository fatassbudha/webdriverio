var chai = require('chai');
global.expect = chai.expect;
chai.Should();
describe('Register Validataion', function() {
    it('should display missing credentials', function() {
    browser.url('localhost:3000/');

    browser.click('#signup');
    browser.click('#sr');

    var a = browser.alertText()

    a.should.be.equal('missing credentials');
    browser.alertAccept();
    console.log('Verify empty fields');
    console.log('LOGINAPP-301 Successful!');

    });
});