export class loginPage {
  weblocators = {
    email: "#Email",
    password: "#Password",
    loginButton: "button[class='button-1 login-button']",
  };

  openURL() {
    cy.visit("");
  }

  enterEmail(email) {
    cy.get(this.weblocators.email).type(email);
  }

  enterPassword(password) {
    cy.get(this.weblocators.password).type(password);
  }

  clickLoginButton() {
    cy.get(this.weblocators.loginButton).click();
  }
}
