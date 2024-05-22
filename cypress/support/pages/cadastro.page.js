export default class CadastroPage {
  inputName = '[placeholder="Nome"]';
  inputEmail = '[placeholder="E-mail"]';
  inputSenha = '[placeholder="Senha"]';
  inputConfirmarSenha = '[placeholder="Confirmar senha"]';
  buttonCadastrar = ".register-form-footer";

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

  clickCadastrar() {
    cy.get(this.buttonCadastrar).click();
  }

  alertaNome() {
    cy.contains("Informe o nome").should("be.visible");
  }

  alertaEmail() {
    cy.contains("Informe o e-mail").should("be.visible");
  }

  alertaSenha() {
    cy.contains("Informe a senha").should("be.visible");
  }

  alertaconfirmarSenha() {
    cy.contains("Informe a senha").should("be.visible");
  }
}
