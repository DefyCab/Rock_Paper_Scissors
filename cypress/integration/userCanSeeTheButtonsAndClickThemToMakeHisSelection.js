/* eslint-disable no-undef */
describe('User can see a display of the buttons', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('is expected to display the rock button', () => {
    cy.get('[data-cy=rock-button]').should('have.text', 'Rock')
  })
  it('is expected to display the paper button', () => {
    cy.get('[data-cy=paper-button]').should('have.text', 'Paper')
  })
  it('is expected to display the rock button', () => {
    cy.get('[data-cy=scissors-button]').should('have.text', 'Scissors')
  })
})

describe('User can click the buttons', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('is expected to be clickable rock', () => {
    cy.get('[data-cy=rock-button]').click()
  })
  it('is expected to be clickable paper', () => {
    cy.get('[data-cy=paper-button]').click()
  })
  it('is expected to be clickable scissors', () => {
    cy.get('[data-cy=scissors-button]').click()
  })
})

