/// <reference types="cypress" />

describe("tasks page", () => {
  it("should render the main image", () => {
    cy.visit("http://localhost:5173/");
    // cy.get(".main-header img");
    // cy.get(".main-header").get("img"); // this will not work because get will search for the image in the entire document, not just inside the main header as if it is chained to the main header element
    cy.get(".main-header").find("img"); // correct way to find the image inside the main header
  });

  it("should display the main title", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains("My Cypress Course Tasks");
  });
});
