describe("fizzbuzz funcion", () => {
    beforeEach(() => {
        cy.visit('localhost')
    })

    it('return fizz if the number is divisible by 3', () => {
        cy.window().then((window) => {
            const result = window.fizzbuzz(3)

            assert.equal(result, 'fizz')
        })
    })

    it('return buzz if the number is divisible by 5', () => {
        cy.window().then((window) => {
            const result = window.fizzbuzz(5)

            assert.equal(result, 'buzz')
        })
    })

    it('return fizzbuzz if the number is divisible by 3 and 5', () => {
        cy.window().then((window) => {
            const result = window.fizzbuzz(15)

            assert.equal(result, 'fizzbuzz')
        })
    })

    it('return your number can not divisible by 3 or 5 ', () => {
        cy.window().then((window) => {
            const result = window.fizzbuzz(1)

            assert.equal(result, 'your number can not divisible by 3 or 5.')
        })
    })
})

describe("add funcion", () => {
    it('should add the two supplied numbers', () => {
        cy.window().then((window) => {
            const result = window.add("2, 3")

            assert.equal(result, 5)
        })
    })
})