import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import Booking from '../../support/pageObjects/booking';
import HomePage from '../../support/pageObjects/homePage';

const booking = new Booking();
const homePage = new HomePage();

When('the page render fully', () => {
  cy.contains('Find your perfect experience');
});

Given(/^I'm on Application Home page$/, function () {
  cy.contains('holibob');
});

And('the page should load with no glitches or unexpected text', () => {
  cy.contains('holibob');
  cy.contains('Find your perfect experience');
  cy.contains('Best rates and availability');
  cy.contains('100,000 tours and experiences');
  cy.contains('Live and instant booking');
  cy.contains('2,500 cities');
  cy.contains('Our Recommendations');
  homePage.getProductImage().should('be.visible');
  homePage.getAccountButton().should('be.visible');
  homePage.getCurrencyButton().should('be.visible');
});

And(/^It should contain a logo$/, function () {
  booking.getLogo().should('be.visible');
});

And(/^Currency button should be visible$/, function () {
  homePage.getCurrencyButton().should('be.visible');
});

And(/^Language button should be visible$/, function () {
  homePage.getLanguageButton().should('be.visible');
});

And(/^New Search button should be visible$/, function () {
  homePage.getNewSearchButton().should('be.visible');
});

And(/^Account button should be visible$/, function () {
  homePage.getAccountButton().should('be.visible');
});

Then(
  /^A currency button with a symbol to the left of the text should be there$/,
  function () {
    homePage.getCurrencyButton().should('be.visible');
    homePage.getCurrencyButton().should('have.text', '$ USD');
  }
);

And(
  'A language button with a flag to the left of the text should be there',
  () => {
    homePage.getLanguageButton();
  }
);

And(/^In sandbox-mode the site contains an “!” icon$/, function () {
  cy.contains('SANDBOXED MODE');
  booking.getBody().click(0, 0);
});

When(/^I click on Search bar$/, function () {
  homePage.getSearchBar().click({ force: true });
});

And(/^I enter "London"$/, function () {
  homePage.getSearchBar().type('London');
});

And(/^search bar should show some result$/, function () {
  cy.contains('London');
});

And(/^I click on cancel button$/, function () {
  homePage.getCancelButton().click();
});

And(/^I should click for next image in carousel$/, function () {
  homePage.getCarouselNextImageButton().click({ multiple: true });
});

Then(/^I should able to see different picture on homepage$/, function () {
  homePage.getCarouselNextImageButton().click({ multiple: true });
});

Then(/^The USPs are displayed above the product list$/, function () {
  homePage.getUSP().should('be.visible');
});

And(/^The site displays all of the products IMMEDIATELY$/, function () {
  booking.getTours().should('be.visible');
});

Then(/^There is no loading bar observed at the top of the page$/, function () {
  booking.getLoadingBar().should('not.be.visible');
});

Then(/^The product cards are correctly rendered with title$/, function () {
  homePage.getProductTitle().should('be.visible');
});

And(/^The product cards are correctly rendered with about$/, function () {
  homePage.getProductDescription().should('be.visible');
});

And(/^The product cards are correctly rendered with price$/, function () {
  homePage.getProductPrice().should('be.visible');
});

And(/^The product cards are correctly rendered with CTA$/, function () {
  homePage.getProductCTA().should('be.visible');
});

Then(/^Heart icon should be visible on product card$/, function () {
  homePage.getFavouriteButton().should('be.visible');
});

Then(/^All product cards have images$/, () => {
  for (let i = 0; i < 3; i++) {
    homePage.getProductImage().each(($el, index, $list) => {
      expect($list[i]).to.be.visible;
    });
  }
});

And(/^Previous button should be disable$/, function () {
  homePage.getPreviousButton().should('be.disabled');
});

And(/^I click on next button$/, function () {
  homePage.getNextButton().click();
});

Then(/^I should able to see next page's product$/, function () {
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.url().should('include', '?page=1&pageSize=36&sort');
});

And(/^I click on previous button$/, function () {
  homePage.getPreviousButton().click();
});

Then(/^I should able to see previous page's product$/, function () {
  cy.url().should('include', '?page=0&pageSize=36&sort');
});

And(/^I click on currency button$/, function () {
  homePage.getCurrencyButton().click();
});

And(/^I select GBP currency$/, function () {
  homePage.selectCurrencyGBP().click();
});

Then(/^Currency should be changed accordingly$/, function () {
  homePage.getCurrencyChange().should('contain', 'From GBP');
});

And(/^I click on language button$/, function () {
  homePage.getLanguageButton().click();
});

And(/^I select France language$/, function () {
  homePage.selectLanguageFrench().click();
});

Then(/^language should be changed accordingly$/, function () {
  homePage.getLanguageChange().should('contain', 'Plus...');
});

And(/^At end of page it should contain logo$/, function () {
  booking.getLogo().should('be.visible');
});

And(/^Contact details$/, function () {
  homePage.getContactDetails();
});

And(/^Powered by Holibob$/, function () {
  homePage.getPoweredByHolibob();
});

And(/^Copyright symbol$/, function () {
  homePage.getCopyrightSymbol();
});
