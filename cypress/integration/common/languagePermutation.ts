import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { getTestId } from '../utils';

Given('I remove all languages', () => {
  const variable = {
    languageCodeData: JSON.stringify([]),
  };

  cy.permutateData(variable);
});

Then('the language button dissapears', () => {
  cy.get(getTestId('languageSelectButton-desktop')).should('not.exist');
});

Then('I add languages back', () => {
  const variable = {
    languageCodeData: JSON.stringify(['en', 'de']),
  };
  cy.permutateData(variable);
  cy.reload();
});

Then('the language button reappears', () => {
  cy.get(getTestId('languageSelectButton-desktop')).should('be.visible');
});
