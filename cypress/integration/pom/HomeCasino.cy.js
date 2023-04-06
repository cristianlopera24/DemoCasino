import faker from "faker";
import HomePageCy from "../../pages/HomePage.cy";
import SignInPageCy from "../../pages/SignInPage.cy";
import SignUpPageCy from "../../pages/SignUpPage.cy";
import MainPagyCy from "../../pages/MainPage.cy";
import RegistrationSuccessfullyCy from "../../pages/RegistrationSuccessfully.cy";
import { beforeEach, describe, it } from "mocha";

const email = faker.internet.email();
const password = faker.internet.password();
const emailRegistered = "testdemocasino@gmail.com";
const passwordUserRegistered = "Test123456";

/**
 * Describe to group test cases
 */
describe("Test Demo Casino", () => {
  beforeEach(() => {
    cy.visit("https://demo.casino/");
  });

  /**
   * function to sign up
   */
  it("User Sign Up", () => {
    HomePageCy.GotItValidationButton();
    HomePageCy.ClickGotItButton();
    HomePageCy.ClickSignUpButton();
    SignUpPageCy.elements.titleSignUp();
    SignUpPageCy.typeEmail(email);
    SignUpPageCy.ClickAcceptConditionsCheckBox();
    SignUpPageCy.VerifyCurrencyUsd();
    SignUpPageCy.TypePasswordInput(password);
    SignUpPageCy.TypePasswordConfirmationInput(password);
    SignUpPageCy.SelectRadioButtonNoBonusCode();
    SignUpPageCy.ClickCreateAccountButton();
    cy.wait(4000);
    RegistrationSuccessfullyCy.VerifyRegistrationSuccessfully();
  });

  /**
   * function to sign in
   */
  it("User Sign In", () => {
    HomePageCy.GotItValidationButton();
    HomePageCy.ClickGotItButton();
    HomePageCy.ClickSignInButton();
    HomePageCy.ClickSignInButton2();
    SignInPageCy.elements.titleSignIn();
    SignInPageCy.typeEmail(emailRegistered);
    SignInPageCy.typePassword(passwordUserRegistered);
    SignInPageCy.clickSignIn();
    MainPagyCy.ValidationBonusLabel();
  });
});
