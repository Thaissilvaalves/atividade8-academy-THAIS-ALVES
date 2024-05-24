import {
  Given,
  When,
  Then,
  After,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

import { fakerPT_BR } from "@faker-js/faker";

import LoginPage from "../pages/login.page";

var loginPage = new LoginPage();

Before({ tags: "@cadastroUsuario" }, () => {
  cy.cadastrarUsuario();
});

After({ tags: "@cadastroUsuario" }, () => {
  cy.deletarUsuario();
});

Given("que acessei a página de login", function () {
  cy.visit("login");
});

When("há um usuário cadastrado", function () {
  cy.get("@usuarioExistente");
});

When("digitar o e-mail", function () {
  cy.get("@usuarioExistente").then(function (resposta) {
    loginPage.typeEmail(resposta.body.email);
  });
});

When("digitar um e-mail diferente do cadastrado", function () {
  loginPage.typeEmail("thais@gmail.com");
});

When("digitar a senha", function () {
  loginPage.typeSenha("123456");
});

When("digitar um e-mail não cadastrado", function () {
  var email = fakerPT_BR.internet.email();
  loginPage.typeEmail(email);
});

When("digitar uma senha não cadastrada", function () {
  var senha = fakerPT_BR.internet.password(8);
  loginPage.typeSenha(senha);
});

When("digitar a senha incorreta", function () {
  loginPage.typeSenha("987654");
});

When("confirmar a operação", function () {
  loginPage.clickLogin();
});

Then("é possível logar com sucesso", function () {
  cy.url().should(
    "equal",
    "https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/"
  );
  cy.contains("Perfil").should("be.visible");
});

Then("o sistema retorna mensagem para informar o e-mail", () => {
  cy.contains("Informe o e-mail").should("be.visible");
});

Then("o sistema retorna mensagem para informar a senha", () => {
  cy.contains("Informe a senha").should("be.visible");
});

Then("o sistema retorna mensagem de falha no login", () => {
  cy.contains("Falha ao autenticar").should("be.visible");
  cy.contains("Usuário ou senha inválidos.").should("be.visible");
  loginPage.clickOk();
});

Then("o sistema retorna mensagem de senha incorreta", () => {
  cy.contains("Informe a senha").should("be.visible");
});

Then("não é possível logar", () => {
  cy.contains("Informe a senha").should("be.visible");
});
