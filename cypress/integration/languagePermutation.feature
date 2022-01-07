@integration
Feature: Language Permutation Feature

Scenario: Language Permutation
    When I remove all languages
    Then the language button dissapears
    Then I add languages back
    Then the language button reappears