import loc from '../locators/loginLocators'

Cypress.Commands.add('efetuaLogin', (usuario, senha) => {
    cy.get(loc.LOGIN.USUARIO).type(usuario)
    cy.get(loc.LOGIN.SENHA).type(senha)
    cy.get(loc.LOGIN.BOTAO).click()
})

Cypress.Commands.add('validaMensagem', (mensagem) => {
    cy.get(loc.LOGIN.MENSAGEM).should('have.text', mensagem)
    cy.screenshot()
})