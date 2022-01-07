import '@cypress/code-coverage/support';
import '@percy/cypress';
import 'cypress-real-events/support';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createHmac } = require('crypto');
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(): void;
      permutateData(variable: { [key: string]: string }): void;
    }
  }
}

before(() => {
  cy.login();
});

Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('[type="text"]').type(Cypress.env('PARTNER_USERNAME'));
  cy.get('button[type=submit]').as('Continue').click();
  cy.get('[type="password"]').type(Cypress.env('PARTNER_PASSWORD'));
  cy.get('button[type=submit]').as('Sign In').click();
});

Cypress.Commands.add('permutateData', (variable) => {
  const now = new Date();
  const currentDate = now.toISOString();
  const apiKey = Cypress.env('API_KEY');
  const apiSecret = Cypress.env('API_SECRET');

  const query = `
    mutation usePartnerChannelUpsert($input: PartnerChannelUpsertInput)
    {
        partnerChannelUpsert(input: $input)
        {
          partnerId
        }
      }
    `;

  const payload = {
    operationName: 'usePartnerChannelUpsert',
    variables: {
      input: {
        id: apiKey,
        ...variable,
      },
    },
    query,
  };

  const hashString = `${currentDate}${apiKey}POST/graphql${JSON.stringify(
    payload
  )}`;

  const hmacString = createHmac('sha1', `${apiSecret}`)
    .update(hashString)
    .digest('hex')
    .toUpperCase();

  const holibobSignature = Buffer.from(hmacString, 'hex').toString('base64');

  cy.request({
    url: Cypress.env('HUB_API'),
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'x-holibob-signature': `${holibobSignature}`,
      'x-holibob-date': `${currentDate}`,
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    console.log(res);
  });
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('fullscreen error')) return false;
});
