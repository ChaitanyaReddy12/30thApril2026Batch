Feature: Alerts And Filters

   @regression
    Scenario: verify filters
        Given I launch the browser
        And I verify filters
        And I close the browser

   @regression
    Scenario: verify playwright simple alert
        Given I launch the browser
        And I verify playwright simple alert
        And I close the browser

   @regression
    Scenario: verify playwright confirmation alert accept
        Given I launch the browser
        And I verify playwright confirmation alert accept
        And I close the browser

   @regression
    Scenario: verify playwright confirmation alert dismiss
        Given I launch the browser
        And I verify playwright confirmation alert dismiss
        And I close the browser

   @regression
    Scenario: verify playwright prompt alert accept without text
        Given I launch the browser
        And I verify playwright prompt alert accept without text
        And I close the browser

   @regression
    Scenario: verify playwright prompt alert accept with text
        Given I launch the browser
        And I verify playwright prompt alert accept with text
        And I close the browser

   @regression
    Scenario: verify playwright prompt alert dismiss
        Given I launch the browser
        And I verify playwright prompt alert dismiss
        And I close the browser