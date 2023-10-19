import { registerPage } from "../pages/registerPage";
const registerObj = new registerPage();
import registerData from "../../fixtures/register-data.json";

describe("Register form Test", () => {
  it.only("should successfully register with valid credentials", () => {
    registerObj.openURL();
    registerObj.checkGender("Male");
    registerObj.enterFirstName(registerData.registerWithValidData.firstName);
    registerObj.enterlastName(registerData.registerWithValidData.lastName);
    registerObj.checkDobDay("3");
    registerObj.checkDobMonth("January");
    registerObj.checkDobYear("1999");
    registerObj.enterEmail(registerData.registerWithValidData.email);
    registerObj.enterCompanyName("ABC Company");
    registerObj.checkNewsLetter();
    registerObj.enterPassword(registerData.registerWithValidData.password);
    registerObj.clickRegisterButton();
    registerObj.verifySuccessRegistration();
  });

  it("Should display mismatch password Error message", () => {
    registerObj.openURL();
    registerObj.checkGender("Male");
    registerObj.enterFirstName(registerData.registerWithinValidData.firstName);
    registerObj.enterlastName(registerData.registerWithinValidData.lastName);
    registerObj.checkDobDay("3");
    registerObj.checkDobMonth("January");
    registerObj.checkDobYear("1999");
    registerObj.enterEmail(registerData.registerWithinValidData.email);
    registerObj.enterCompanyName("ABC Company");
    registerObj.checkNewsLetter();
    registerObj.enterPassword(registerData.registerWithinValidData.password);
    registerObj.clickRegisterButton();
    registerObj.enterconfirmpass(
      registerData.registerWithinValidData.confirmpassword
    );
    registerObj.clickRegisterButton();
    cy.get("#ConfirmPassword-error")
      .should("be.visible")
      .and("contain", "The password and confirmation password do not match.");
  });

  it("should display error message for invalid email format", () => {
    registerObj.openURL();
    registerObj.checkGender("Male");
    registerObj.enterFirstName(registerData.registerWithinValidData.firstName);
    registerObj.enterlastName(registerData.registerWithinValidData.lastName);
    registerObj.checkDobDay("3");
    registerObj.checkDobMonth("January");
    registerObj.checkDobYear("1999");
    registerObj.enterEmail(registerData.registerWithinValidData.invalidEmail);
    registerObj.enterCompanyName("ABC Company");
    registerObj.checkNewsLetter();
    registerObj.enterPassword(registerData.registerWithinValidData.password);
    registerObj.clickRegisterButton();
    cy.get("#Email-error").should("be.visible").and("contain", "Wrong email");
  });
});
