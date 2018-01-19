Feature: My First Learning Feature File

@base
Scenario: My First Scenario
Given That i open the url
When I click on the API section
And Search with the keyword "wait"
Then the search results should be filtered

@waitCase
Scenario: Checking on wait scenario
Given That i open the e url
When I click on the Google option
And Enter the creds
Then I check the icons are displayed
And I click on the timeline icon
And verify the timepage has timenow and no future text

@chatAuto
Scenario: Checking on wait scenario
Given That i open the e url
When I click on the Google option
And Enter the creds
Then I check the icons are displayed
And I click on the chat icons
And send message "Hi"
And verify there is response.