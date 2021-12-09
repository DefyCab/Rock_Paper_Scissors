/* eslint-disable no-undef */
describe('User can make a selection between rock, paper and scissors', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('is expected to return value of 0', () => {
    cy.get('[data-cy=rock-button]').click()
    expect(userNumber).to.eq(0)
  })
  it('is expected to return value of 1', () => {
    cy.get('[data-cy=paper-button]').click()
    expect(userNumber).to.eq(1)
  })
  it('is expected to return value of 2', () => {
    cy.get('[data-cy=scissors-button]').click()
    expect(userNumber).to.eq(2)
  })
})


describe('User can see own choice, computer choice and result on screen', () => {
  })

it.only('is expected to show result of choice', () => {
  cy.get('[data-cy=user-output]').should('have.text', )
})