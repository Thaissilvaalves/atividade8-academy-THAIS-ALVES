import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

import { fakerPT_BR } from "@faker-js/faker";

import LoginPage from "../pages/login.page";

var loginPage = new LoginPage();
var email;
var senha;

Before({ tags: "@cadastroUsuario" }, () => {
  cy.cadastrarUsuario();
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

When("digitar a senha", function () {
  cy.get("@usuarioExistente").then(function (resposta) {
    loginPage.typeSenha(resposta.body.password);
  });
});

When("confirmar a operação", function () {
  loginPage.clickLogin();
});

Then("é possível logar com sucesso", function () {
  cy.url().should(
    "equal",
    "https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/"
  );
});
