var assert = require('assert');
describe('Login Validation', function() {
    it('should login successfully', function () {
        browser.url('localhost:3000/');
        
        browser.setValue('#reguser', 'admin');
        browser.setValue('#regpass', 'admin');

        browser.click('#signin');

        var title = browser.getTitle();
        assert.equal(title, 'Home');
        console.log('Validate valid credentials');
        console.log('LOGINAPP-203 Successful');
    });
		
});

//done
//VALIDATE VALID LOGIN CREDENTIALS