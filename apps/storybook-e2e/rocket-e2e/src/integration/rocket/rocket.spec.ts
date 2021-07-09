describe('rocket: Rocket component', () => {
  it('should render the rocket', () => {
    cy.visit('/iframe.html?id=rocket--primary&args=isLaunching:false;');
    cy.get('[data-testing="rocket"]');
  });

  it('should visualize the stars and fume only when launching the rocket', () => {
    cy.visit('/iframe.html?id=rocket--primary&args=isLaunching:false;');
    cy.get('[data-testing="rocket-fumes"]').should('not.exist');
    cy.get('[data-testing="stars"]').should('not.exist');

    cy.visit('/iframe.html?id=rocket--primary&args=isLaunching:true;');
    cy.get('[data-testing="rocket-fumes"]');
    cy.get('[data-testing="stars"]');
  });
});
