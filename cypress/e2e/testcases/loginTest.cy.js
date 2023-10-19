///<reference types="cypress" />

import { loginPage } from "../pages/loginPage";
import loginData from "../../fixtures/login-data.json";

const loginObj = new loginPage();
describe("Login form Test", () => {
  it("should successfully Login with valid credentials", () => {
    loginObj.openURL();
    loginObj.enterEmail(loginData.loginWithValidData.email);
    loginObj.enterPassword(loginData.loginWithValidData.password);
    loginObj.clickLoginButton();
    cy.get(".topic-block-title > h2").should(
      "have.text",
      "Welcome to our store"
    );
  });

  it("should successfully Login with valid credentials", () => {
    loginObj.openURL();
    loginObj.enterEmail(loginData.loginWithinValidData.email);
    loginObj.enterPassword(loginData.loginWithinValidData.password);
    loginObj.clickLoginButton();
    cy.get(".message-error").should(
      "contain",
      "Login was unsuccessful. Please correct the errors and try"
    );
  });
});
