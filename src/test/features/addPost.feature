Feature: Conduit Login Functionality

Scenario: Login and Logout with valid credentials
Given I am on the conduit login page
When I login with valid credentials
And I click on New Post button
And I fill out all the required fields
And I publish the article
Then I should see article posted

