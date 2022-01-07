import { getTestId } from '../../integration/utils';

class Booking {
  getLoadingBar(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('loadingBar'));
  }

  getTours(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('productCardTitle'));
  }

  getCalendarTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('calendarTitle'));
  }

  getActiveDays(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('calendarDay-Active'));
  }

  getAvailabiltyDropdownOptions(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('availabilityOptions-Dropdown'));
  }

  getAvailabilityOptions(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('selectOption'));
  }

  getNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('availabilityOptionSubmit'));
  }

  getPlusButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('ticketType-Plus'));
  }

  getAddBookingButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('addBooking-Button'));
  }

  getSummaryTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormSummary-Title'));
  }

  getTCLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('termsAndConditions-Link'));
  }

  getLeadPersonsNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormDetail-LeadPassenger'));
  }

  getReferenceInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormDetail-Reference'));
  }

  getLeadPersonsFirstNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormQuestion-First name'));
  }

  getLeadPersonsLastNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormQuestion-Last name'));
  }

  getLeadPersonsPhoneNumberInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormQuestion-Phone number'));
  }

  getLeadPersonsEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormQuestion-Email address'));
  }

  getSpecialRequirementInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormQuestion-Special Requirements'));
  }

  getACTandCInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('termsAndConditions-Checkbox'));
  }

  getCompleteBookingButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingFormSubmit-Button'));
  }

  getBookingCode(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('paymentModal-BookingCode'));
  }

  getPaymentAmount(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('paymentModal-Price'));
  }

  getCardIframe(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.frameLoaded('.__PrivateStripeElement > iframe');
  }

  getPayNowButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('paymentModal-PayNow'));
  }

  getConfirmatonMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('bookingCompleteModal-Message'));
  }

  getBody(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('body');
  }

  getConfirmedStatus(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('labelValueValue-Booking Status'));
  }

  getLogo(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('logoImage'));
  }

  getForm(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('form');
  }

  getInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('input');
  }

  getBarCode(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('voucher-barcode'));
  }

  getVoucherBookingCode(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('voucherSummary-BookingCode'));
  }

  getVoucherBookingReference(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('voucherSummary-BookingReference'));
  }

  getVoucherBookingLeadPassengerName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(getTestId('voucherSummary-BookingLeadPassengerName'));
  }
}

export default Booking;
