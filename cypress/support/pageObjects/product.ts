import { getTestId } from '../../integration/utils';

class Product {
  getNewSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('newSearch'));
  }

  getNextImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('button[aria-label="Go to Slide 2"]');
  }

  getDifferentPic(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('div[aria-label="Go to Slide 2"]');
  }

  getFullViewButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.image-gallery-icon');
  }

  getProductImageSlideGallary(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('productImageSlideGallery'));
  }

  getAboutSection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('expand-about'));
  }

  getStartTimeSection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('expand-start-times'));
  }

  getCancellationSection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('expand-cancellation-policy'));
  }

  getCalendarNextMonthButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('calendarNextMonth'));
  }

  getTimeSlotDropDown(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('availabilityOptions-Dropdown'));
  }
}

export default Product;
