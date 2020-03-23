
describe('Movie Search Page', function() {
  it('Visits the movie search home page', function() {
		cy.visit('http://localhost:3000/')

		cy.get('.react-autosuggest__input')
			.type('ave')
			.should('have.value', 'ave')

		cy.get('input[placeholder="Type a movie name"]')
			.wait(1000)
			.type('{downarrow}{enter}')

		cy.url().should('include', '/movies/tt0069634')

		cy.get('.content')
			.should('contain', 'Some Mothers Do')

  })
})
