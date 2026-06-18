Feature: : Reading Test Data From The Feature File

    @regression
    Scenario:  verifying reading the testdata from the feature file
        Given I launch the browser
        Then I launch the test automation practice application
        And I am reading the testdata from the feature file "<Name>","<Email>","<Phone>","<Address>","<wikipedia>"
        And I close the browser

        Examples:
            | Name    | Email               | Phone      | Address   | wikipedia  |
            | Karthik | karthik@gmail.com   | 9090909090 | Hyderabad | playwright |
            | Deepthi | deepthi@yahoo.com   | 7890789090 | Bangalore | typescript |
            | Lakshmi | lakshmi@outlook.com | 5678907890 | Chennai   | Selenium   |
            | Sridhar | Sridhar@gmail.com   | 6789067890 | pune      | javascript |
            | Venkat  | venkat@outlook.com  | 4567890456 | kerala    | java       |
            | Ashok   | Ashok@outlook.com   | 1234567890 | kadapa    | pom        |


    @regression
    Scenario Outline:  verifying reading the testdata for orangehrm application
        Given I launch the browser
        And I am reading the testdata for orangehrm application "<url>","<username>","<password>"
        And I close the browser

        Examples:
            | url                                                                | username | password |
            | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | Admin    | admin123 |




