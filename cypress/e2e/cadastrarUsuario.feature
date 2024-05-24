# language: pt

Funcionalidade: Cadastrar usuário

Contexto: Usuário deve ter acessado a página de cadastro
  Dado que acessei a funcionalidade de cadastro


Cenário: Deve ser possível cadastrar um usuário com sucesso
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então o usuário deverá ser cadastrado com sucesso
  E deve ser do tipo usuário comum

  Cenário: Não deve ser possível cadastrar um usuário sem nome
  Quando informar um novo e-mail
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então deverá aparecer um alerta de que é preciso informar um nome
 
  Cenário: Não deve ser possível cadastrar um usuário sem e-mail
  Quando informar um novo nome
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então deverá aparecer um alerta de que é preciso informar um e-mail

  Cenário: Não deve ser possível cadastrar um usuário sem senha
  Quando informar um novo nome
  E informar um novo e-mail
  E confirmar a senha
  E confirmar a operação
  Então deverá aparecer um alerta de que é preciso informar a senha

  Cenário: Não deve ser possível cadastrar um usuário sem a confirmação de senha
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar a operação
  Então deverá aparecer um alerta de que é preciso repetir a senha

  Cenário: Não deve ser possível a senha ser divergente da confirmação da senha
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E informar outra senha na confirmação
  E confirmar a operação
  Então deverá aparecer um alerta de senha divergente


  Cenário: Deve ser possível cadastrar uma senha com 12 caracteres
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma senha com 12 caracteres "111111111111"
  E confirmar a senha com 12 caracteres "111111111111"
  E confirmar a operação
  Então o usuário deverá ser cadastrado com sucesso

  Cenário: Não deve ser possível cadastrar uma senha com 13 caracteres
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma senha com 13 caracteres "1111111111111"
  E confirmar a senha com 13 caracteres "1111111111111"
  E confirmar a operação
  Então deverá aparecer um alerta de que a senha deve ter no máximo 12 caracteres 


  Cenário: Deve ser possível cadastrar uma senha com 6 caracteres
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma senha com 6 caracteres "111111"
  E confirmar a senha com 6 caracteres "111111"
  E confirmar a operação
  Então o usuário deverá ser cadastrado com sucesso

  Cenário: Não deve ser possível cadastrar uma senha com 5 caracteres
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma senha com 5 caracteres "11111"
  E confirmar a senha com 5 caracteres "11111"
  E confirmar a operação
  Então deverá aparecer um alerta de que a senha deve ter no mínimo 6 caracteres 

Esquema do Cenário: Não deve ser possível cadastrar um usuário com e-mail em formato inválido
  Quando informar um novo nome
  E informar o e-mail "<email>"
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então o usuário não será cadastrado
  Exemplos:
    | email |
    | tha@  |
    | .com  |
    | @.com |
    | .444  |

@emailJaCadastrado
  Cenário: Não deve ser possível cadastrar um usuário com e-mail já cadastrado
  Quando informar um novo nome
  E informar um e-mail já utilizado
  E informar uma nova senha
  E confirmar a senha
  E confirmar a operação
  Então devo visualizar uma mensagem de erro

