export default class LoginPage {
  inputEmail = "[placeholder='E-mail']";
  inputSenha = "[placeholder='Password']";
  buttonLogin = ".login-button";
  buttonOk = ".modal-actions > button";

  typeEmail(email) {
    cy.get(this.inputEmail).type(email);
  }

  typeSenha(senha) {
    cy.get(this.inputSenha).type(senha);
  }

  clickLogin() {
    cy.get(this.buttonLogin).click();
  }

  clickOk() {
    cy.get(this.buttonOk).click();
  }
}
