describe('tables-in-tables', () => {
  it('Table 1', () => {
    cy.visit('path-to-your-file.html');  // Adjust the path

    // Ensure 'Nested Table 2' is found
    cy.contains('th', 'Nested Table 2').should('be.visible');
  });
});
