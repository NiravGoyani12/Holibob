@integration
Feature: Render Home Page Feature

  Background: :
    Given I'm on Application Home page

  Scenario: Render the page fully
    When the page render fully
    Then the page should load with no glitches or unexpected text

  Scenario: Header Logo
    When the page render fully
    Then It should contain a logo

  Scenario: Currency button
    When the page render fully
    And I click on currency button
    And I select GBP currency
    Then Currency should be changed accordingly

  Scenario: Account button
    When the page render fully
    And I click on Account button
    Then I should able to see My Favourite
    And I should able to see Sign Out

  Scenario: Footer
    When the page render fully
    Then At end of page it should contain logo
    And Contact details
    And Powered by Holibob
    And Copyright symbol

  Scenario: multiple scrolling image - on homepage
    When the page render fully
    And I should click for next image in carousel
    Then I should able to see different picture on homepage

  Scenario: USP
    When the page render fully
    Then The USPs are displayed above the product list

  Scenario: Product card
    When the page render fully
    Then The product cards are correctly rendered with title
    And The product cards are correctly rendered with about
    And The product cards are correctly rendered with price
    And The product cards are correctly rendered with CTA

  Scenario: Product card image
    When the page render fully
    Then All product cards have images

  Scenario: Heart icon
    When the page render fully
    Then Heart icon should be visible on product card

  Scenario: Next button on homepage
    When the page render fully
    And Previous button should be disable
    And I click on next button
    Then I should able to see next page's product

  Scenario: Previous button on homepage
    When the page render fully
    And I click on previous button
    Then I should able to see previous page's product

  Scenario: Validate search button
    When I click on Search bar
    And I enter "London"
    Then search bar should show some result
    And I click on cancel button

  Scenario: Account button - Sandbox text
    When the page render fully
    And I click on Account button
    Then In sandbox-mode the site contains an “!” icon
#    And I click on Account button

#Functionality Issue

#  Scenario: Product visibility
#    When the page render fully
#    Then The site displays all of the products IMMEDIATELY
#    And There is no loading bar observed at the top of the page

#  Scenario: Language button
#    When the page render fully
#    And I click on language button
#    And I select France language
#    Then language should be changed accordingly