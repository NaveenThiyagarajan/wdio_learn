var {defineSupportCode} = require('cucumber');
var common = require('../pages/common.js');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should(); 

defineSupportCode(function({Then}){
    Then(/^the search results should be filtered$/,function(){
        var count = 0;
        var elements_hidden = browser.elements('//div[contains(@class,"commands")]/a[not(@style)]');
 //       console.log(elements_hidden);
        var noOfElements = elements_hidden.value.length;
        console.log("Number of elements identified: "+ noOfElements);
        for (let index = 0; index < noOfElements; index++) {
            var element = elements_hidden.value[index].ELEMENT;
            //var uiValue = browser.getText("("+element+")["+index+"]");
            var uiValue = browser.elementIdText(element).value;
            console.log("UIValue: " + uiValue);
            //console.log("Value of stye: " + browser.getCssProperty(element,'style'));
            if(uiValue.toLowerCase().includes("wait")){
                console.log("The value displayed on the UI: " + uiValue);
                count++;
            }           
        }
        console.log('count: ' + count);
        expect(count).to.be.equal(noOfElements);
    });

    Then(/^I check the icons are displayed$/, function(){
        var naviElement = '//nav/ul/li';
        var count = 0;

        console.log('wait untill started');
        browser.waitUntil(function(){
            return browser.elements(naviElement).value.length > 0;
        }, 15000, 'The navigation icon are not there');
        console.log('wait until completed');

        if(browser.isExisting(naviElement)){
            console.log('There is navigation bar icons');
            var nEles = browser.elements(naviElement);
            count = nEles.value.length;
        }

        console.log('The number icons in the navigation bar is: ' + count);

        expect(count>3).to.be.true;

    });

    Then(/^I click on the timeline icon$/, function(){
        browser.click('//nav/ul/li[3]');

        console.log('The timeline icon is clicked');
    });

    Then(/^verify the timepage has timenow and no future text$/, function(){

        browser.waitForExist('div.timeline-updated-time-container');
        browser.waitUntil(function(){
            return (browser.elements('div.timeline-container section').value.length > 2);
        }, 3000, 'There are no events in the timeline');

        var tempText = browser.getText('div.timeline-container>section:first-child');
        var tempTime = browser.getText('div.timeline-updated-time-container');
        
        console.log("Text: " + tempText);
        console.log("Time: " + tempTime);

        expect(tempText).to.be.equal('No tasks or future events');

    });

    Then(/^I click on the chat icons$/, function(){
        browser.click('//nav/ul/li[2]');

        console.log('The chat icon is clicked');
    });

    Then(/^send message "(.*)"$/, function(msg){
        expect(common.sendMsg(msg)).to.be.true;
        browser.pause(5000);
    });
});