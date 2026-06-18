Feature: WaitsAndWindowsHandling

   @regression
    Scenario: verify playwright Waits
        Given I launch the browser
        And I verify playwright Waits
        And I close the browser

   @regression
    Scenario: verify playwright windows handling
        Given verify playwright windows handling
