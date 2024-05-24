export default class GerenciaPage {
  inputName = '[name="name"]';
  inputEmail = '[name="email"]';
  inputSenha = '[name="password"]';
  inputConfirmarSenha = '[name="confirmPassword"]';
  buttonSalvar = ".account-save-button";
  buttonAlterarSenha = ".account-password-button";
  buttonOk = ".modal-actions > button";
  buttonCancelar = ".account-password-button-cancel";
  linkPerfil = '[href="/profile"]';
  linkLogout = '[href="/logout"]';
  linkGerenciarConta = '[href="/account"]';
  msgFormulario = ".input-error";

  typeName(nome) {
    cy.get(this.inputName).type(nome);
  }

  typeEmail(email) {
    cy.get(this.inputEmail).type(email);
  }

  typeSenha(senha) {
    cy.get(this.inputSenha).type(senha);
  }

  typeConfirmarSenha(senha) {
    cy.get(this.inputConfirmarSenha).type(senha);
  }

  clickSalvar() {
    cy.get(this.buttonSalvar).click();
  }

  clickAlterarSenha() {
    cy.get(this.buttonAlterarSenha).click();
  }

  clickPerfil() {
    cy.get(this.linkPerfil).click();
  }

  clickGerenciarConta() {
    cy.get(this.linkGerenciarConta).click();
  }

  clickLogout() {
    cy.get(this.linkLogout).click();
  }

  clickOk() {
    cy.get(this.buttonOk).click();
  }

  clickCancelar() {
    cy.get(this.buttonCancelar).click();
  }
}
