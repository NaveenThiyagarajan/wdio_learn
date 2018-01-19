var {defineSupportCode} = require('cucumber');
var login = require('../pages/common.js');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should(); 

defineSupportCode(function({Given}){    
    //Given(/^That i open the url$/,login.openUrl);

    Given(/^That i open the url$/, function(){
        browser.url('/');
        //browser.element('selector of a DOM').click();
        //expect('A').to.be.equal('B');
    });

    Given(/^That i open the e url$/, function(){
        browser.url('/m');
        //browser.element('selector of a DOM').click();
        //expect('A').to.be.equal('B');
    });
});