import { fakerPT_BR } from "@faker-js/faker";

var nome = fakerPT_BR.person.firstName();
var email = fakerPT_BR.internet.email();
var senha = "123456";

Cypress.Commands.add("cadastrarUsuario", function () {
  return cy
    .request({
      method: "POST",
      url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users",
      body: {
        name: nome,
        email: email,
        password: senha,
      },
    })
    .as("usuarioExistente")
    .then(function (resposta) {
      idUsuario = resposta.body.id;
      nome = resposta.body.name;
      email = resposta.body.email;
    });
});

Cypress.Commands.add("deletarUsuario", function () {
  cy.request({
    method: "POST",
    url: "https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login",
    body: {
      email: email,
      password: senha,
    },
  })
    .then((response) => {
      token = response.body.accessToken;
      cy.request({
        method: "PATCH",
        url: "https://raromdb-3c39614e42d4.herokuapp.com/api/users/admin",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    })
    .then((response) => {
      cy.request({
        method: "DELETE",
        url:
          "https://raromdb-3c39614e42d4.herokuapp.com/api/users/" + idUsuario,
        headers: {
          Authorization: "Bearer " + token,
        },
      }).as("deletarUsuario");
    });
});
