var assert = require('assert');
describe('Dashboard Page', function() {
    it('should have logout', function () {
        browser.url('localhost:3000/');
        
        browser.setValue('#reguser', 'admin');
        browser.setValue('#regpass', 'admin');
        browser.click('#signin');
        
        browser.click('#leave');
        var title = browser.getTitle();
        assert.equal(title, 'Handlebars Webdev');
        console.log('Validate successful logout');
        console.log('LOGINAPP-402 Successful');
    });
		
});

//done
//LOGOUT SUCCESSFULLY