/* eslint-disable cypress/no-unnecessary-waiting */
import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import 'cypress-iframe';
import Booking from '../../support/pageObjects/booking';
import Product from '../../support/pageObjects/product';

let confirmationPageUrl = '';
const booking = new Booking();
const product = new Product();

Given('I am on the landing page', () => {
  // in the future the test should be changed to validate non-existance of the loading bar
  booking.getLoadingBar().should('be.visible');
});

And('I select a tour', () => {
  booking.getTours().each(($el) => {
    const actualText = $el.text();
    if (actualText === Cypress.env('RENDER_PRODUCT_TITLE')) {
      $el.click();
    }
  });
});

And('I see the available dates', () => {
  booking.getCalendarTitle().should('be.visible');
});

And('I select an available date', () => {
  booking.getActiveDays().each(($el, index, $list) => {
    $list[$list.length - 1].click();
  });
});

And('I select the first option', () => {
  booking.getAvailabiltyDropdownOptions().click({ multiple: true });
  booking.getAvailabilityOptions().each(($el, index, $list) => {
    $list[0].click();
  });
});

And('I click on the next button', () => {
  booking.getNextButton().click();
});

And('I add an adult', () => {
  booking.getPlusButton().first().click();
});

And('I add the Booking', () => {
  booking.getAddBookingButton().click({ multiple: true });
});

And('I see a summary of the booking to the top right of the page', () => {
  booking.getSummaryTitle().should('be.visible');
});

And('a New Search button is present in the header', () => {
  product.getNewSearchButton().should('be.visible');
});

And('you can follow the link to the Terms and Conditions', () => {
  booking.getTCLink().click();
});

And('Terms and conditions opens', () => {
  cy.contains('Holibob Agency Terms & Conditions');
  cy.go('back');
});

And('I enter lead persons name', () => {
  booking.getLeadPersonsNameInput().find('input').type('Test');
});

And('I enter reference', () => {
  cy.url().then((url) => {
    cy.visit(url + '?bookingExternalReference=1234');
  });
  cy.reload();
  booking.getReferenceInput().find('input').should('have.value', '1234');
});

And('I enter Lead Persons first name', () => {
  booking.getLeadPersonsFirstNameInput().find('input').type('John');
});

And('I enter Lead Persons last name', () => {
  booking.getLeadPersonsLastNameInput().find('input').type('Doe');
});

And('I enter Lead Persons phone number', () => {
  booking.getLeadPersonsPhoneNumberInput().find('input').type('1234 567890');
});

And('I enter Lead Persons email', () => {
  booking.getLeadPersonsEmailInput().find('input').type('example@gmail.com');
});

And('I enter special requirements', () => {
  booking.getSpecialRequirementInput().find('input').type('none');
});

And('I accept terms and conditions', () => {
  booking.getACTandCInput().find('input').check();
});

Then('I should click on the complete Booking button', () => {
  booking.getCompleteBookingButton().click();
});

Then('card payment dialogue appears', () => {
  cy.contains('Pay for booking');
});

Then('dialogue clearly displays the booking code', () => {
  booking.getBookingCode().should('be.visible');
});

Then('dialogue clearly display the Amount', () => {
  booking.getPaymentAmount().should('be.visible');
});

Then('I enter card number', () => {
  booking.getCardIframe().then(($element) => {
    const $body = $element.contents().find('body');

    cy.wrap($body)
      .find('[name="cardnumber"]')
      .click()
      .type(Cypress.env('CARD_NUMBER'));

    cy.wrap($body)
      .find('[name="exp-date"]')
      .click()
      .type(Cypress.env('EXP_DATE'));

    cy.wrap($body).find('[name="cvc"]').click().type(Cypress.env('CVC'));

    cy.wrap($body).find('[name="postal"]').click().type(Cypress.env('POSTAL'));
  });
});

Then('I click on the pay now button', () => {
  booking.getPayNowButton().click();
});

Then('I see confirmation message', () => {
  booking.getConfirmatonMessage().contains('Thank you');
});

Then('I go to the confirmation page', () => {
  booking.getBody().click(0, 0);
  cy.url().then((pageUrl) => {
    confirmationPageUrl = pageUrl;
  });
});

Given("I'm on the confirmation page", () => {
  cy.login();
  cy.wait(30000);
  cy.visit(confirmationPageUrl);
});

Then('I should see the status change to confirmed', () => {
  booking.getConfirmedStatus().find('span').contains('CONFIRMED');
});

Then('I should not see the email is expected message', () => {
  cy.contains('You will receive a confirmation email shortly').should(
    'not.exist'
  );
});

Then(
  'the site opens in the brand of the original site you booked on and no other',
  () => {
    booking.getLogo().should('be.visible');
  }
);

Then('the page can not be edited', () => {
  booking.getForm().should('not.exist');
  booking.getInput().should('not.exist');
});

Given("I'm on the booking voucher page", () => {
  const urlBits = confirmationPageUrl.split('/');
  const voucherUrl =
    Cypress.env('BOOKING_VOUCHER_URL') +
    urlBits[urlBits.length - 1] +
    '/voucher';
  cy.visit(voucherUrl);
});

Then('I log in into booking voucher page', () => {
  cy.get('[type="text"]').type(Cypress.env('PARTNER_USERNAME'));
  cy.contains('Continue').click();
  cy.get('input[autocomplete="current-password"]').type(
    Cypress.env('PARTNER_PASSWORD')
  );
  cy.get('button[type=submit]').as('Sign In').click();
});

Given("I'm on the booking render voucher page", () => {
  const urlBits = confirmationPageUrl.split('/');
  const voucherUrl =
    Cypress.env('BOOKING_VOUCHER_URL') +
    urlBits[urlBits.length - 1] +
    '/voucher/render';
  cy.visit(voucherUrl);
});

And('I see the bar code', () => {
  booking.getBarCode().should('be.visible');
});

And('I see the booking code', () => {
  booking.getVoucherBookingCode().find('.LabelValueValue').should('be.visible');
});

And('I see the booking reference', () => {
  booking
    .getVoucherBookingReference()
    .find('.LabelValueValue')
    .should('be.visible');
});

And('I see the lead passenger', () => {
  booking
    .getVoucherBookingLeadPassengerName()
    .find('.LabelValueValue')
    .should('be.visible');
});

And('I see the tour I had booked', () => {
  cy.contains(Cypress.env('RENDER_PRODUCT_TITLE'));
});

Then('I see page summary', () => {
  cy.contains('Booking Summary');
});
