/* eslint-disable no-undef */
describe('User can make a selection between rock, paper and scissors', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it ('is expected to return value of 0', () => {
    cy.get('[data-cy=rock-button]').click().should('have.value', 0)
  })
  it ('is expected to return value of 1', () => {
    cy.get('[data-cy=paper-button]').click().should('have.value', 1)
  })
  it ('is expected to return value of 2', () => {
    cy.get('[data-cy=scissors-button]').click().should('have.value', 2)
  })
})

  