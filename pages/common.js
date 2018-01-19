module.exports.openUrl = function(){
    browser.url('/m');
    browser.pause(3000);
};

module.exports.sendMsg = function(msg){
    try{
        browser.waitForExist('input[type="text"]');

        browser.setValue('input[type="text"]', msg);
        browser.click('button[type="submit"]');

        console.log('The msg ' + msg + ' is sent');
        return true;
    }catch(err){
        console.log('The msg ' + msg + ' is FAILED to sent');
        console.log('ERROR: ' + err.message);
        return false;
    }
    
};

module.exports.verifyIsThereResponse = function(msg){

};