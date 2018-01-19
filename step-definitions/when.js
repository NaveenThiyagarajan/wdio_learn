var {defineSupportCode} = require('cucumber');


defineSupportCode(function({When}){
    When(/^I click on the API section$/,function(){
        browser.click('=API');
        //browser.pause(2000);
        console.log('The API button is clicked');
    });
    When(/^Search with the keyword "(.*)"$/,function(keyword){
        browser.setValue('[name="search"]',keyword);
        browser.pause(2000);
        console.log('The search box is entered with the text: ' + keyword);
    });
    
    When(/^I click on the Google option$/,function(){
        browser.click('div=Google+');
        //browser.pause(2000);
        console.log('The Google button is clicked');
    });

    When(/^Enter the creds$/,function(){
        browser.setValue('input[type="email"]', "XXX@gmail.com");
        browser.click('span=Next');
        console.log('EmailID entered and next clicked');

        browser.waitForText('#password');
        
        browser.setValue('input[type="password"]','XXXXXX');
        browser.click('span=Next');
        console.log('password is entered and next is clicked');

        browser.pause(3000);
    });
});