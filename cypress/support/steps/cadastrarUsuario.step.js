import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

import { fakerPT_BR } from "@faker-js/faker";

import CadastroPage from "../pages/cadastro.page";

var cadastroPage = new CadastroPage();
var senha = fakerPT_BR.internet.password(8);

Given("que acessei a funcionalidade de cadastro", function () {
  cy.visit("/register");
});

When("informar um novo nome", function () {
  var nome = fakerPT_BR.person.firstName();
  cadastroPage.typeName(nome);
});

When("informar um novo e-mail", function () {
  var email = fakerPT_BR.internet.email();
  cadastroPage.typeEmail(email);
});

When("informar o e-mail {string}", function (email) {
  cadastroPage.typeEmail(email);
});

When("informar uma nova senha", function () {
  cadastroPage.typeSenha(senha);
});

When("confirmar a senha", function () {
  cadastroPage.typeConfirmarSenha(senha);
});

When("confirmar a operação", function () {
  cy.intercept("POST", "/api/users").as("cadastroUsuario");
  cadastroPage.clickCadastrar();
});

When("informar uma senha com 12 caracteres {string}", function (senha) {
  cadastroPage.typeSenha(senha);
});

When("informar uma senha com 13 caracteres {string}", function (senha) {
  cadastroPage.typeSenha(senha);
});

When("informar uma senha com 6 caracteres {string}", function (senha) {
  cadastroPage.typeSenha(senha);
});

When("informar uma senha com 5 caracteres {string}", function (senha) {
  cadastroPage.typeSenha(senha);
});

When("confirmar a senha com 12 caracteres {string}", function (senha) {
  cadastroPage.typeConfirmarSenha(senha);
});

When("confirmar a senha com 13 caracteres {string}", function (senha) {
  cadastroPage.typeConfirmarSenha(senha);
});

When("confirmar a senha com 6 caracteres {string}", function (senha) {
  cadastroPage.typeConfirmarSenha(senha);
});

When("confirmar a senha com 5 caracteres {string}", function (senha) {
  cadastroPage.typeConfirmarSenha(senha);
});

When("informar outra senha na confirmação", function () {
  cadastroPage.typeConfirmarSenha("testando");
});

Then("o usuário deverá ser cadastrado com sucesso", function () {
  cy.contains("Sucesso").should("be.visible");
  cy.contains("Cadastro realizado!").should("be.visible");
});

Then("deve ser do tipo usuário comum", function () {
  cy.wait("@cadastroUsuario").then(function (resposta) {
    type = resposta.response.body.type;
    cy.wrap(type).should("eq", 0);
    expect(resposta.response.statusCode).to.equal(201);
  });
});

Then(
  "deverá aparecer um alerta de que é preciso informar um nome",
  function () {
    cadastroPage.alertaNome();
  }
);

Then(
  "deverá aparecer um alerta de que é preciso informar um e-mail",
  function () {
    cadastroPage.alertaEmail();
  }
);

Then(
  "deverá aparecer um alerta de que é preciso informar a senha",
  function () {
    cadastroPage.alertaSenha();
  }
);

Then("deverá aparecer um alerta de que é preciso repetir a senha", function () {
  cadastroPage.alertaconfirmarSenha();
});

Then(
  "deverá aparecer um alerta de que a senha deve ter no máximo 12 caracteres",
  function () {
    cy.contains("A senha deve ter no máximo 12 dígitos.").should("be.visible");
  }
);

Then(
  "deverá aparecer um alerta de que a senha deve ter no mínimo 6 caracteres",
  function () {
    cy.contains("A senha deve ter pelo menos 6 dígitos.").should("be.visible");
  }
);

Then("o usuário não será cadastrado", function () {
  cy.contains("Falha no cadastro.").should("be.visible");
  cy.contains("Não foi possível cadastrar o usuário.").should("be.visible");
});

Then("deverá aparecer um alerta de senha divergente", () => {
  cy.contains("As senhas devem ser iguais").should("be.visible");
});

Before({ tags: "@emailJaCadastrado" }, () => {
  const email = fakerPT_BR.internet.email();
  cy.wrap(email).as("emailJaCadastrado");
  cy.request(
    "POST",
    "https://raromdb-3c39614e42d4.herokuapp.com/api/users",

    {
      name: fakerPT_BR.person.fullName(),
      email,
      password: fakerPT_BR.internet.password(8),
    }
  );
});

When("informar um e-mail já utilizado", function () {
  cy.get("@emailJaCadastrado").then((email) => {
    cadastroPage.typeEmail(email);
  });
});

Then("devo visualizar uma mensagem de erro", () => {
  cy.contains("E-mail já cadastrado. Utilize outro e-mail").should(
    "be.visible"
  );
});
