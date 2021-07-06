describe('control-panel: LaunchButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=launchbutton--primary&args=onClick;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to control-panel!');
    });
});
