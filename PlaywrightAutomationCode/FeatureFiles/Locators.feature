
Feature: Locators

   @regression
    Scenario: verify playwright locators
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify playwright locators
        And I close the browser

   @regression
    Scenario: verify playwright locators part2
        Given I launch the browser
        And I verify playwright locators part2
        And I close the browser

   @regression
    Scenario: verify selenium locators
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify selenium locators
        And I close the browser

   @regression
    Scenario: verify selenium xpath locators
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify selenium xpath methods
        And I close the browser

   @regression
    Scenario: verify selenium xpath Axes
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify selenium xpath Axes
        # And I close the browser