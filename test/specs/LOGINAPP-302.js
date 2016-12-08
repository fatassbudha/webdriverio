var assert = require('assert');
describe('Register Validataion', function() {
    it('should register successfully', function () {
        browser.url('localhost:3000/signup');

        browser.setValue('#newuser', 'test');
        browser.setValue('#newpass', 'test');

        browser.click('#sr');
        
        var title = browser.getTitle();
        assert.equal(title, 'Handlebars Webdev');
        console.log('Verify successful registration');
        console.log('LOGINAPP-302 Successful');
    });
		
});

//done
//VERIFY SUCCESSFUL REGISTRATION