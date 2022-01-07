import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import Booking from '../../support/pageObjects/booking';
import HomePage from '../../support/pageObjects/homePage';
/* eslint-disable cypress/no-unnecessary-waiting */
import ProductPage from '../../support/pageObjects/product';

const product = new ProductPage();
const booking = new Booking();
const home = new HomePage();

When('I select a tour', () => {
  booking.getTours().each(($el) => {
    const actualText = $el.text();
    if (actualText === Cypress.env('RENDER_PRODUCT_TITLE')) {
      $el.click();
    }
  });
});

And(/^I click on New Search button$/, function () {
  product.getNewSearchButton().click();
});

Then(/^search bar should be visible$/, function () {
  home.getSearchBar().should('be.visible');
});

Given(/^I'm on the landing page$/, function () {
  cy.login();
});

And(/^I should click for next image$/, function () {
  product.getNextImage().click({ multiple: true });
});

Then(/^I should able to see different picture$/, function () {
  product.getDifferentPic().should('be.visible');
});

And(/^I click on full view product image button$/, function () {
  product.getFullViewButton().click();
});

Then(/^image should open on full-screen$/, function () {
  product
    .getProductImageSlideGallary()
    .should('be.visible')
    .and(($img) => {
      expect($img[0].offsetWidth).to.be.greaterThan(0);
    });
});

And(/^I click on heart icon$/, function () {
  cy.wait(5000);
  home.getFavouriteButton().click();
});

Then(/^I click on Account button$/, function () {
  home.getAccountButton().click();
});

Then(/^I click on my favourite in account dropdown$/, function () {
  cy.contains('My Favourites').click();
});

Then(/^product should be visible to favourite list$/, function () {
  home
    .getProductTitle()
    .should('have.text', Cypress.env('RENDER_PRODUCT_TITLE'));
});

And('I select different Product', () => {
  home.getProductImage().each(($el, index, $list) => {
    $list[1].click();
  });
});

Then(/^product should be not be visible to favourite list$/, function () {
  cy.contains('You have not selected any favourites!');
});

Then(
  /^The product attributes are rendered with icons below the carousel$/,
  function () {
    home.getUSP().should('be.visible');
  }
);

Then(
  /^The “About” section of the product is expanded by default$/,
  function () {
    product.getAboutSection().should('be.visible');
  }
);

And(/^The content of about section should be visible$/, function () {
  cy.contains('About');
});

And(/^I click on expand button of Start time section$/, function () {
  product.getStartTimeSection().click();
});

Then(/^The content of start time section should be visible$/, function () {
  cy.contains('Duration');
  cy.contains('Start Time');
});

And(/^I click on expand button of Cancellation section$/, function () {
  product.getCancellationSection().click();
});

Then(/^The content of cancellation section should be visible$/, function () {
  cy.contains('No refund will apply if you cancel within');
});

Then(/^The calendar includes at least some “green” days$/, function () {
  booking.getActiveDays().should('be.visible');
});

And(/^I click on next month button$/, function () {
  product.getCalendarNextMonthButton().click();
});

Then(/^dates are visible if bookable$/, function () {
  booking.getActiveDays().should('be.visible');
});

When(/^I click on the available date$/, function () {
  booking.getActiveDays().each(($el, index, $list) => {
    $list[$list.length - 1].click();
  });
});

Then(/^Time slot dropdown should be visible$/, function () {
  product.getTimeSlotDropDown().should('be.visible');
});

Then(/^I should able to see My Favourite$/, function () {
  cy.contains('My Favourites');
});

And(/^I should able to see Sign Out$/, function () {
  cy.contains('Sign Out');
  booking.getBody().click(0, 0);
});
