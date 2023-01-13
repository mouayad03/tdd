describe('Sign Out', () => {
    it('returns only ACTIVE products', () => {
        
    })

})

describe('Sign in', () => {
    it('returns active products', () => {
        cy.visit('http://localhost')
        cy.get('input#username-field').type('root')
        cy.get('input#password-field').type('sUP3R53CR3T#')
        cy.get('button[type=submit').click()
        cy.contains('Home').click()

    })



    it('returns all products', () => {

    })

})
