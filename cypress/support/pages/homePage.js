import loc from '../locators/homeLocators'

Cypress.Commands.add('validaHome', (titulo, descricao) => {
    cy.get(loc.HOME.TITULO).should('have.text', titulo)
    cy.get(loc.HOME.DESCRICAO).should('have.text', descricao)
    cy.screenshot()
})