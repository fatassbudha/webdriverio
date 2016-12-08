var assert = require('assert');
describe('Landing page', function() {
    it('should have description', function () {
        browser.url('localhost:3000/');

        var des = browser.getText('#des');
        assert.equal(des, 'shout shout shout ouuuuuut.');
        console.log('Verify page description');
        console.log('LOGINAPP-102 Successful');
    });
		
});

//DDONE!!
// VERIFY PAGE DESCRIPTION 