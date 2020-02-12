it("loads examples", () => {
  cy.visit("http://localhost:4200");
  cy.contains("Replace me with something relevant");
});

it('sample', () => {
  cy.get('#input').type('Hello Cypres')
  cy.get('#input').focus()
})
