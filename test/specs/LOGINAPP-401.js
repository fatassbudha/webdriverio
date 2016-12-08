var assert = require('assert');
describe('Dashboard Page', function() {
    it('should have a logout link visible', function () {
        browser.url('localhost:3000/');
        
        browser.setValue('#reguser', 'admin');
        browser.setValue('#regpass', 'admin');
        browser.click('#signin');
        
        var chkLogout = browser.getText('#leave');
        if (chkLogout == 'Leave') {
        console.log('Verify logout navigation');
        console.log('LOGINAPP-401 Successful!');};
    });
		
});

//DONE
//VERIFY LOGOUT NAVIGATION