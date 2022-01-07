@integration
Feature: Booking 

    Scenario: Booking a Tour
        Given I am on the landing page
        And I select a tour
        And I see the available dates
        And I select an available date
        And I select the first option
        And I click on the next button
        And I add an adult
        And I add the Booking
        And I see a summary of the booking to the top right of the page
        And a New Search button is present in the header
        And you can follow the link to the Terms and Conditions
        And Terms and conditions opens
       # And I enter reference
        And I enter lead persons name
        And I enter Lead Persons first name
        And I enter Lead Persons last name
        And I enter Lead Persons phone number
        And I enter Lead Persons email
        # And I enter special requirements
        And I accept terms and conditions
        Then I should click on the complete Booking button 
        Then card payment dialogue appears
        Then dialogue clearly displays the booking code
        Then dialogue clearly display the Amount
        Then I enter card number
        Then I click on the pay now button 
        Then I see confirmation message
        Then I go to the confirmation page

    Scenario: Confirming booking page
        Given I'm on the confirmation page
        Then I should not see the email is expected message

    Scenario: Confirming opening in the brand of the original site
        Given I'm on the confirmation page
        Then the site opens in the brand of the original site you booked on and no other

    Scenario: Page can not be edited
        Given I'm on the confirmation page
        Then the page can not be edited

    Scenario: Confirming that tour is booked
        Given I'm on the confirmation page
        Then I should see the status change to confirmed

    Scenario: Generate voucher pdf
        Given I'm on the booking voucher page
        Then I log in into booking voucher page

    Scenario: Render invoice voucher
        Given I'm on the booking render voucher page
        And I see the bar code 
        And I see the booking code
        #And I see the booking reference
        And I see the lead passenger
        And I see the tour I had booked
        Then I see page summary







        