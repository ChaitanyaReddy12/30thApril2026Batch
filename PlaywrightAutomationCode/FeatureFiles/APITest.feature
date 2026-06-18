Feature: API Testing

    @method
    Scenario: Perform Delete Operation
        Given I send a delete request
        Then The response status code of delete should be 204

    @method
    Scenario: Perform Get Operation
        Given I send a get request
        Then The response status code of get should be 200

    @method
    Scenario: Perform Post Operation
        Given I send a post request with body
            """
            {
            "name" : "Ashok",
            "job": "Senior Test Engineer"
            }

            """
        Then The response status code of post should be 201

    @method
    Scenario: Perform Put Operation
        Given I send a put request with body
            """
            {
            "name" : "Ashok",
            "job": "Technical Engineer"
            }

            """
        Then The response status code of put should be 200

    @method
    Scenario: Perform Patch Operation
        Given I send a patch request with body
            """
            {
            "name" : "Jaspreet",
            "job": "Technical Manager"
            }

            """
        Then The response status code of patch should be 200