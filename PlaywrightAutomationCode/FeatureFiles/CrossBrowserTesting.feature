
Feature: Cross Browser Testing

   @regression
    Scenario: verify playwright execution in chrome
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify playwright Methods part5
        And I close the browser

   @regression
    Scenario: verify playwright execution in firefox
        Given I launch the firefox browser
        Then I launch the test automation practice application
        And I verify playwright Methods part5
        And I close the browser

   @regression
    Scenario: verify playwright execution in webkit
        Given I launch the webkit browser
        Then I launch the test automation practice application
        And I verify playwright Methods part5
        And I close the browser

   @regression
    Scenario: verify playwright execution in headless mode
        Given I launch the headless browser
        Then I launch the test automation practice application
        And I verify playwright Methods part5
        And I close the browser
