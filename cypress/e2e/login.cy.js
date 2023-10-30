import '../support/pages/loginPage'
import '../support/pages/homePage'

describe('Cenários de Login', () => {
  beforeEach(() => {
    cy.visit('https://rlhorochovec.github.io/qa/index.html')
  })

  it('Login - Usuário e/ou senha incorretos!', () => {
    cy.efetuaLogin('user', 'admin')
    cy.validaMensagem('Usuário e/ou senha incorretos!')
  })

  it('Login - Informe usuário e senha!', () => {
    cy.efetuaLogin('', '')
    cy.validaMensagem('Informe usuário e senha!')
  })

  it('Login - Informe o usuário!', () => {
    cy.efetuaLogin('', 'admin')
    cy.validaMensagem('Informe o usuário!')
  })

  it('Login - Informe a senha!', () => {
    cy.efetuaLogin('user', '')
    cy.validaMensagem('Informe a senha!')
  })

  it('Login - Admin', () => {
    cy.efetuaLogin('admin', 'admin')
    cy.validaHome('Administrador', 'Você efetuou o login como administrador.')
  })

  it('Login - User', () => {
    cy.efetuaLogin('user', 'user')
    cy.validaHome('Usuário', 'Você efetuou o login como usuário.')
  })
})