Feature: Property API
  Scenario: Get all reviews
    When a GET request is made to "/review"
    Then the response status code should be 200

  Scenario: Create a review
    When a POST REVIEW request is made to "/review" with the following data:
      | comentario     | estancia agradable |
      | propertyId     | 64d13ffd6fa3018421c92b5e |
      | huespedId      | 64d13ffd6fa3018421c92b5e |
    Then the create response status code should be 201