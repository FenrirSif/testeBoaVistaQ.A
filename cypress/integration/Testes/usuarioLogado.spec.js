/// <reference types="Cypress" />

describe('Teste funcional', () => {
    before(() =>{
        cy.visit('https://bugbank.netlify.app/')
    })
    it.only('Login validação com erro',()=>{
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@gmail.com')
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123')
        cy.get('.otUnI').click()
        cy.get('#modalText').should('contain','Usuário ou senha inválido')
        cy.get('#btnCloseModal').click()
    })

})    