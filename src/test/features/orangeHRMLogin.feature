Feature: Orange HRM Loging Functionality

Scenario Outline: Login with valid and invalid credentials
Given I am on the hrm loging page
When I login with "<username>" and password as "<password>"
And I click on the login button
Then I route to the Orange hrm page

Examples:
|username|password|
|Admin|admin123|
|Admin123|admin|