import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  failureThreshold: 0.0,
  failureThresholdType: "percent",
  customDiffConfig: { threshold: 0.0 }
});

console.log("here");

Cypress.Commands.add("setResolution", size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});

Cypress.Commands.add("getPageSizes", () => {
  try {
    return Cypress.env("pageSizes");
  } catch {
    throw new Error('Do you have "env.pageSizes" set up in your config file?');
  }
});
