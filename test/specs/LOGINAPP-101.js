var assert = require('assert');
var chai = require('chai');
global.expect = chai.expect;
chai.Should();

describe('Landing page', function() {
    it('should have the right title - Handlebars Webdev', function () {
        browser.url('localhost:3000/');
        
        
        var title = browser.getTitle();
        assert.equal(title, 'Handlebars Webdev');
        console.log('Verify page title');
        console.log('LOGINAPP-101 Successful!');
    });
		
});

//DONE
//VERIFY PAGE TITLE 
/*
describe('Landing page', function() {
    it('should have description', function () {
        browser.url('localhost:3000/');

        var des = browser.getText('#des');
        assert.equal(des, 'shout shout shout ouuuuuut.');
        console.log('Verify page description');
        console.log('LOGINAPP-102 Successful');
    });
		
});

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
*/