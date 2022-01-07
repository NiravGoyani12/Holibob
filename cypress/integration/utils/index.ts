export const getTestId = (id: string) =>
  `[${Cypress.env('DATA_TEST_ID')}="${id}"]`;
