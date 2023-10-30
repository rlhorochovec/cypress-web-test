describe('Cenários de Login', () => {
  beforeEach(() => {
    cy.visit('https://rlhorochovec.github.io/qa/index.html')
  })

  it('Login - Usuário e/ou senha incorretos!', () => {
    cy.get('#login').type('user')
    cy.get('#senha').type('admin')
    cy.get('.w-100').click()
    cy.get('#erro').should('have.text', 'Usuário e/ou senha incorretos!')
  })

  it('Login - Informe usuário e senha!', () => {
    cy.get('.w-100').click()
    cy.get('#erro').should('have.text', 'Informe usuário e senha!')
  })

  it('Login - Informe o usuário!', () => {
    cy.get('#senha').type('admin')
    cy.get('.w-100').click()
    cy.get('#erro').should('have.text', 'Informe o usuário!')
  })

  it('Login - Informe a senha!', () => {
    cy.get('#login').type('user')
    cy.get('.w-100').click()
    cy.get('#erro').should('have.text', 'Informe a senha!')
  })

  it('Login - Admin', () => {
    cy.get('#login').type('admin')
    cy.get('#senha').type('admin')
    cy.get('.w-100').click()
    cy.get('h2').should('have.text', 'Administrador')
    cy.get('p').should('have.text', 'Você efetuou o login como administrador.')
    cy.screenshot()
  })

  it('Login - User', () => {
    cy.get('#login').type('user')
    cy.get('#senha').type('user')
    cy.get('.w-100').click()
    cy.get('h2').should('have.text', 'Usuário')
    cy.get('p').should('have.text', 'Você efetuou o login como usuário.')
    cy.screenshot()
  })
})