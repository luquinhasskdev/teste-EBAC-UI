/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        
    });
    
    it('Deve selecionar um produto da lista', () => {
        //cy.get('.product-block').first().click() Vai abrir o primeiro produto
        //cy.get('.product-block').last().click() Vai abrir o último produto
        //cy.get('.product-block').eq(1).click() Vai abrir o produto que eu quiser conforme a sua posição (0,1,2,...)
        cy.get('.product-block').contains('Apollo Running Short').click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });
});