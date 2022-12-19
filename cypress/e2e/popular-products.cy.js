const { it } = require("node:test")

const skuCheck = () => {
    cy.visit('http://localhost/products.php')
    beforeEach(() => {
        cy.get('input#username-field').type('root')
        cy.get('input#password-field').type('sUP3R53CR3T#')
        cy.get('button[type=submit').click()
        cy.contains('Products').click()
})
}

    describe("Product table functionality", () => {
        beforeEach(() => {
            cy.visit("http://localhost");
            cy.get('input#username-field').type('root')
            cy.get('input#password-field').type('sUP3R53CR3T#')
            cy.get('button[type=submit').click()
            cy.contains('Products').click()
        });
      
        it("displays only active products", () => {
          cy.get("#products-table tr td:first-child").then(skus => {
            const activeProducts = products.filter(product => product.active === 1);
            expect(activeProducts).to.have.length(skus.length);
          });
        });
      });
      
    


describe('shop app if signed sign', () => {
  beforeEach(() => {
    cy.visit('http://localhost')
    cy.contains('Home').click()
    cy.get('input#username-field').type('root')
    cy.get('input#password-field').type('sUP3R53CR3T#')
    cy.get('button[type=submit').click()
    cy.contains('Home').click()
  })

  it('list all active products', () => {
    
  })

  it('Stock check', () => {
    
  })
})
