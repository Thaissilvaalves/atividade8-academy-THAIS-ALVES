import { fakerPT_BR } from "@faker-js/faker";

Cypress.Commands.add("cadastrarUsuario", function () {
  var nome = fakerPT_BR.person.firstName();
  var email = fakerPT_BR.internet.email();
  var senha = "123456";
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

      //   return cy.wrap({
      //     name: nome,
      //     email: email,
      //     id: idUsuario,
      //     password: senha,
      //   });
    });
});

// Cypress.Commands.add("logarUsuario", function (email, senha) {
//   return cy
//     .request({
//       method: "POST",
//       url: apiUrl + "api/auth/login",
//       body: {
//         email: email,
//         password: senha,
//       },
//     })
//     .then(function (resposta) {
//       return {
//         email: email,
//         password: senha,
//         token: resposta.body.accessToken,
//       };
//     });
// });

// Cypress.Commands.add("tornarAdmin", function (token) {
//   return cy.request({
//     method: "PATCH",
//     url: apiUrl + "/api/users/admin",
//     auth: {
//       bearer: token,
//     },
//   });
// });

// Cypress.Commands.add("deletarUsuario", function (idUsuario, email, senha) {
//   return cy.logar(email, senha).then(function (resposta) {
//     var token = resposta.token;
//     cy.tornarAdmin(token).then(function () {
//       cy.request({
//         method: "DELETE",
//         url: apiUrl + "/api/users/ + {idUsuario}",
//         auth: {
//           bearer: token,
//         },
//       });
//     });
//   });
// });
