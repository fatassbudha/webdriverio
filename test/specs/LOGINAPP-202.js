var chai = require('chai');
global.expect = chai.expect;
chai.Should();
describe('Login Validation', function() {
    it('should display invalid credentials', function() {
    browser.url('localhost:3000/');
        
    browser.setValue('#reguser','errorTest');
    browser.setValue('#regpass','errorTest');
    browser.click('#signin');
  
        

    var a = browser.alertText()
    a.should.be.equal('invalid credentials');
    browser.alertAccept();
    console.log('Validate invalid credentials');
    console.log('LOGINAPP-202 Successful!');
    });
});