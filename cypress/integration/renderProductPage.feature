@integration
Feature: Render Product Page Feature

  Background: :
    Given I'm on the landing page
    When I select a tour

  Scenario: Header
    Then It should contain a logo
    And Currency button should be visible
    And Language button should be visible
    And New Search button should be visible
    And Account button should be visible

  Scenario: Footer
    When the page render fully
    Then At end of page it should contain logo
    And Contact details
    And Powered by Holibob
    And Copyright symbol

  Scenario: Validate search button on Product
    And I click on New Search button
    Then search bar should be visible

  Scenario: multiple scrolling image on Product
    And I should click for next image
    Then I should able to see different picture

  Scenario: Click on image for full-view for Selected Product
    And I click on full view product image button
    Then image should open on full-screen

  Scenario: Favourite functionality - Turning on
    And I click on heart icon
    And I click on Account button
    And I click on my favourite in account dropdown
    Then product should be visible to favourite list

  Scenario: Favourite functionality - Turning off
    And I click on heart icon
    And I click on Account button
    And I click on my favourite in account dropdown
    And I click on heart icon
    Then product should be not be visible to favourite list

  Scenario: Product attributes
    And I select different Product
    Then The product attributes are rendered with icons below the carousel

  Scenario: About section
    Then The “About” section of the product is expanded by default
    And The content of about section should be visible

  Scenario: Start Time sections
    And I click on expand button of Start time section
    Then The content of start time section should be visible

  Scenario: Cancellation policy sections
    And I click on expand button of Cancellation section
    Then The content of cancellation section should be visible

  Scenario: Calendar functionality
    Then The calendar includes at least some “green” days

  Scenario: Calendar functionality - next month
    And The calendar includes at least some “green” days
    And I click on next month button
    Then dates are visible if bookable

  Scenario: Available dates
    And The calendar includes at least some “green” days
    And I click on the available date
    Then Time slot dropdown should be visible
