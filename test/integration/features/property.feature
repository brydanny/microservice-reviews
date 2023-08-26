Feature: Property API
  Scenario: Get all properties
    When a GET request is made to "/property"
    Then the response status code should be 200

  Scenario: Create a property
    When a POST request is made to "/property" with the following data:
      | name     | Casa de Campo  |
      | address | Coroico,  Region, Bolivia |
    Then the response status code should be 201