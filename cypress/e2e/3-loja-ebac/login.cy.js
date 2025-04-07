/// <reference types="cypress"/>

describe('Funcionalidade: Login',() => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('lucas.teste@teste.com.br')
        cy.get('#password').type('darksouls2')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lucas.teste-5078 (não é lucas.teste-5078? Sair)')
    })
})
