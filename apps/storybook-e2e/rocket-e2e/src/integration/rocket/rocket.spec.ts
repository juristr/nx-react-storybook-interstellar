describe('rocket: Rocket component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rocket--primary&args=isLaunching:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to rocket!');
    });
});
