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
    });
});
