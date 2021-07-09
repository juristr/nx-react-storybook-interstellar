describe('control-panel: LaunchButton component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=launchbutton--primary&args=onClick;')
  );

  it('should render the launch button', () => {
    cy.get('[data-testing="launch-button"]').should('contain.text', 'Launch');
  });

  it('should change the text & be disabled when clicking the button', () => {
    cy.get('[data-testing="launch-button"]').click();
    cy.get('[data-testing="launch-button"]').should(
      'contain.text',
      'Launching...'
    );
    cy.get('[data-testing="launch-button"]').should(
      'have.attr',
      'aria-disabled',
      'true'
    );
  });
});
