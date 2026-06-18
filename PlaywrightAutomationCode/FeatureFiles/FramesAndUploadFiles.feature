Feature: Frames And UploadFiles

   @regression
    Scenario: verify playwright frames
        Given I launch the browser
        And I verify playwright frames
        And I close the browser

   @regression
    Scenario: verify playwright file upload
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify playwright file upload
        And I close the browser