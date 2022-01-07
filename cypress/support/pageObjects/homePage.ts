import { getTestId } from '../../integration/utils';

class HomePage {
  getAccountButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('accountButton-desktop'));
  }

  getCurrencyButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('currencySelectButton-desktop'));
  }

  getLanguageButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('languageSelectButton-desktop'));
  }

  getNewSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('newSearch'));
  }

  getSearchBar(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('input[type="text"]');
  }

  getCancelButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(
      'path[d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]'
    );
  }

  getCarouselNextImageButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('li[class="paging-item"]');
  }

  getUSP(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('USP'));
  }

  getProductTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('productCardTitle'));
  }

  getProductDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('productCardDescription'));
  }

  getProductPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('productCardPrice'));
  }

  getProductCTA(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('learn-more-button'));
  }

  getFavouriteButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('favouriteButton'));
  }

  getProductImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('productCardImage'));
  }

  getPreviousButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('previousButton'));
  }

  getNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('nextButton'));
  }

  getCurrencyChange(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('productCardPrice'));
  }

  selectCurrencyGBP(): Cypress.Chainable<undefined> {
    return cy.contains('£ GBP');
  }

  selectLanguageFrench(): Cypress.Chainable<undefined> {
    return cy.contains('Français');
  }

  getLanguageChange(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('learn-more-button'));
  }

  getContactDetails(): Cypress.Chainable<undefined> {
    return cy.contains('Contact');
  }

  getPoweredByHolibob(): Cypress.Chainable<undefined> {
    return cy.contains('Powered By');
  }

  getCopyrightSymbol(): Cypress.Chainable<undefined> {
    return cy.contains('© 2021 Holibob Limited.');
  }
}

export default HomePage;
