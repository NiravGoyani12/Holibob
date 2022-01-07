# Holibob QA Automation

## Setup

To install this application you will need to have [Node v16](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com). Run `yarn` from the root directory to install required packages.

## Configure

This application was tailored to test <https://distributed.booking.holibob.tech> but you can run it for any other Partner Channel.

Create .env file in a root directory and add the following keys with your own values:

```
CYPRESS_BASE_URL=partner_channel_url
CYPRESS_PARTNER_USERNAME=partner_channel_username
CYPRESS_PARTNER_PASSWORD=partner_channel_password
CYPRESS_DATA_TEST_ID=data-testid
CYPRESS_RENDER_PRODUCT_TITLE=Full Product Title

CYPRESS_CARD_NUMBER=4242424242424242
CYPRESS_EXP_DATE=11/29
CYPRESS_CVC=123
CYPRESS_POSTAL=90210

CYPRESS_API_KEY=hub_api_key
CYPRESS_API_SECRET=hub_api_secret
CYPRESS_HUB_API=hub_api
CYPRESS_BOOKING_VOUCHER_URL=booking_voucher_url
```

`CYPRESS_RENDER_PRODUCT_TITLE` is the full title of a product you want to run `renderProductPage.feature` test against, for example `Warner Brothers - Harry Potter Studio Tour`

`CYPRESS_BOOKING_PRODUCT_TITLE` is the full title of a product you want to run `booking.feature` test against.

Chosen products have to be available on a first page of the Home screen.

Card details use test card numbers from Stripe documentation at <https://stripe.com/docs/testing>.

`CYPRESS_POSTAL` is US postal code because the default currency is USD. If your Partner channel default currency is different, you may need to adjust postal code.

## Run tests in GUI environment

`yarn cy:open`

## Run tests in headless mode

`yarn cy:test`
