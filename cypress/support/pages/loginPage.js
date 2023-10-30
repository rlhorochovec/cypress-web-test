import loc from '../locators/loginLocators'

Cypress.Commands.add('efetuaLogin', (usuario, senha) => {
    if (usuario != '') {
        cy.get(loc.LOGIN.USUARIO).type(usuario).should('have.value', usuario)
    }
    if (senha != '') {
        cy.get(loc.LOGIN.SENHA).type(senha).should('have.value', senha)
    }
    cy.get(loc.LOGIN.BOTAO).click()
})

Cypress.Commands.add('validaMensagem', (mensagem) => {
    cy.get(loc.LOGIN.MENSAGEM).should('have.text', mensagem)
})