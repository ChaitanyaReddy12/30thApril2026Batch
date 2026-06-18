Feature: Background Keyword

Background: common steps
        Given I launch the browser
        Then I launch the test automation practice application

  @regression
    Scenario: verify web table in static way
        And I verify web table in static way
        And I close the browser

  @regression
    Scenario: verify web table in static way2
        And I verify web table in static way2
        And I close the browser

  @regression
    Scenario: verify web table in dynamic way
        And I verify web table in dynamic way
        And I close the browser

  @regression
    Scenario: verify web table in dynamic way
        And I verify web table in dynamic way header section
        And I close the browser

  @regression
    Scenario: verify and method in playwright
        And I verify and method in playwright
        And I close the browser

