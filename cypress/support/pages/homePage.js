import loc from '../locators/homeLocators'

Cypress.Commands.add('validaHome', (titulo, descricao) => {
    cy.get(loc.HOME.TITULO).should('have.text', titulo)
    cy.contains(loc.HOME.DESCRICAO).should('be.visible');
    cy.screenshot()
})