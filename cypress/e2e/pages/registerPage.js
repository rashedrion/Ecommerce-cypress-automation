export class registerPage {
  weblocators = {
    gender: "#gender-male",
    firstName: "#FirstName",
    lastName: "#LastName",
    dob_day: '[name="DateOfBirthDay"]',
    dob_month: '[name="DateOfBirthMonth"]',
    dob_year: "select[name='DateOfBirthYear']",
    email: "#Email",
    companyName: "#Company",
    newsletter: "#Newsletter",
    password: "#Password",
    confirm_pass: "#ConfirmPassword",
    registerButton: "#register-button",
    result: ".result",
  };

  openURL() {
    cy.visit(Cypress.env("URL"));
  }

  checkGender() {
    cy.get(this.weblocators.gender).check();
  }
  enterFirstName(Fname) {
    cy.get(this.weblocators.firstName).type(Fname);
  }
  enterlastName(LName) {
    cy.get(this.weblocators.lastName).type(LName);
  }

  checkDobDay(day) {
    cy.get(this.weblocators.dob_day).select(day);
  }

  checkDobMonth(month) {
    cy.get(this.weblocators.dob_month).select(month);
  }

  checkDobYear(year) {
    cy.get(this.weblocators.dob_year).select(year);
  }

  enterEmail(email) {
    cy.get(this.weblocators.email).type(email);
  }
  enterCompanyName(company) {
    cy.get(this.weblocators.companyName).type(company);
  }

  checkNewsLetter() {
    cy.get(this.weblocators.newsletter).check();
  }

  enterPassword(password) {
    cy.get(this.weblocators.password).type(password);
    cy.get(this.weblocators.confirm_pass).type(password);
  }
  enterconfirmpass(confirmpass) {
    cy.get(this.weblocators.confirm_pass).type(confirmpass);
  }

  clickRegisterButton() {
    cy.get(this.weblocators.registerButton).click();
  }

  verifySuccessRegistration() {
    return cy
      .get(this.weblocators.result)
      .should("have.text", "Your registration completed");
  }
}
