var assert = require('assert');
describe('Landing Page', function() {
    it('should verify login form', function () {
        browser.url('localhost:3000/');

        var chkLogin = browser.getText('#signin');
        if (chkLogin == 'Sign in') {

        console.log('Verify login form');
        console.log('LOGINAPP-103 Successful!');};
    });
		
});

//UNDONE
//VERIFY LOGIN FORM