/* eslint-disable no-undef */
describe('User can see the Ai selected move', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('is expected to display a rock icon', () => {
    cy.get('[data-cy=rock-icon]').should('be.visible')
  })
  it('is expected to display a rock icon', () => {
    cy.get('[data-cy=paper-icon]').should('be.visible')
  })
  it('is expected to display a rock icon', () => {
    cy.get('[data-cy=scissors-icon]').should('be.visible')
  })
})
