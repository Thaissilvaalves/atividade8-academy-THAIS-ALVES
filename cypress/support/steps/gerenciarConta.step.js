import {
  Given,
  When,
  Then,
  After,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

import { fakerPT_BR } from "@faker-js/faker";

import GerenciaPage from "../pages/gerencia.page";
import LoginPage from "../pages/login.page";

var gerenciaPage = new GerenciaPage();
var loginPage = new LoginPage();

Before(function () {
  cy.cadastrarUsuario();
  cy.visit("/login");
  cy.get("@usuarioExistente").then(function (resposta) {
    gerenciaPage.typeEmail(resposta.body.email);
    gerenciaPage.typeSenha("123456");
    loginPage.clickLogin();
  });
});

After(function () {
  cy.deletarUsuario();
});

Given("que acessei a funcionalidade de gerenciamento de conta", function () {
  gerenciaPage.clickPerfil();
  gerenciaPage.clickGerenciarConta();
});

When("alterar o nome", function () {
  var nome = fakerPT_BR.person.firstName();
  gerenciaPage.typeName(nome);
});

When("alterar a senha", function () {
  gerenciaPage.clickAlterarSenha();
  gerenciaPage.typeSenha("987654");
});

When("confirmar a nova senha", function () {
  gerenciaPage.typeConfirmarSenha("987654");
});

When("confirmar a nova senha divergente", function () {
  gerenciaPage.typeConfirmarSenha("123456");
});

When("iniciar o processo de alteração de senha", function () {
  gerenciaPage.clickAlterarSenha();
});

When("desejar cancelar a operação", function () {
  gerenciaPage.clickCancelar();
});

When("confirmar a operação", function () {
  gerenciaPage.clickSalvar();
});

When("alterar a senha {string}", function (senha) {
  gerenciaPage.clickAlterarSenha();
  cy.get(gerenciaPage.inputSenha).type(senha);
});

When("confirmar a nova senha {string}", function (senha) {
  cy.get(gerenciaPage.inputConfirmarSenha).type(senha);
});

Then("é possível visualizar os dados relevantes do perfil", function () {
  cy.contains("Nome").should("be.visible");
  cy.contains("E-mail").should("be.visible");
  cy.contains("Senha").should("be.visible");
  cy.contains("Confirmar senha").should("be.visible");
  cy.contains("Comum").should("be.visible");
});

Then("o usuário deverá ser atualizado com sucesso", function () {
  cy.contains("Sucesso").should("be.visible");
  cy.contains("Informações atualizadas!").should("be.visible");
  gerenciaPage.clickOk();
});

Then("a operação deverá ser cancelada", function () {
  cy.get(gerenciaPage.inputSenha).should("be.disabled");
});

Then("o sistema deverá retornar uma mensagem de alerta", function () {
  cy.contains("As senhas devem ser iguais.").should("be.visible");
});

Then(
  "deverá aparecer o alerta do limite de caracteres {string}",
  function (alerta) {
    cy.get(gerenciaPage.msgFormulario).contains(alerta);
  }
);

Then("deverá aparecer uma mensagem de erro", function () {
  cy.contains("Ocorreu um erro").should("be.visible");
  cy.contains("Não foi possível atualizar os dados.").should("be.visible");
  gerenciaPage.clickOk();
});
