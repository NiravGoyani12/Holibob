@integration
Feature: Currency Permutation Feature

Scenario: Currency Permutation
    When I remove all currency
    Then the currency button disappears
    Then I add the currencies back
    Then the currency button reappears