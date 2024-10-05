// home page

describe("Home Page", () => {
  it("should visit home page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("contain", "My First React App");
    cy.get("p").should("contain", "Welcome to my first React app.");
  });
});
