describe("Coming Soon visual regression tests", () => {
  Cypress.env("pageSizes").forEach(size => {
    it(`Should match previous screenshot for '${size}' resolution`, () => {
      cy.setResolution(size);
      cy.visit("/coming-soon");
      cy.matchImageSnapshot();
    });
  });
});
