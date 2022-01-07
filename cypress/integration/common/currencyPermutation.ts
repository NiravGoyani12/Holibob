import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { getTestId } from '../utils';

When('I remove all currency', () => {
  const variable = {
    currencyCodeData: JSON.stringify([]),
  };
  cy.permutateData(variable);
});

Then('the currency button disappears', () => {
  cy.get(getTestId('currencySelectButton-desktop')).should('not.exist');
});

Then('I add the currencies back', () => {
  const variable = {
    currencyCodeData: JSON.stringify(['USD', 'GBP']),
  };
  cy.permutateData(variable);
  cy.reload();
});

Then('the currency button reappears', () => {
  cy.get(getTestId('currencySelectButton-desktop')).should('be.visible');
});
