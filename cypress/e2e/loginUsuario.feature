# language: pt

Funcionalidade: Login de usuário

Contexto: Usuário deve ter acessado a página de login
Dado que acessei a página de login

@cadastroUsuario 
Cenário: Deve ser possível logar um usuário com sucesso
Quando há um usuário cadastrado
E digitar o e-mail
E digitar a senha
E confirmar a operação
Então é possível logar com sucesso

@cadastroUsuario 
Cenário: Não deve ser possível logar sem digitar o e-mail
Quando há um usuário cadastrado
E digitar a senha
E confirmar a operação
Então o sistema retorna mensagem para informar o e-mail

@cadastroUsuario 
Cenário: Não deve ser possível logar sem digitar a senha
Quando há um usuário cadastrado
E digitar o e-mail
E confirmar a operação
Então o sistema retorna mensagem para informar a senha

@cadastroUsuario
Cenário: Não deve ser possível logar com e-mail diferente do cadastrado
Quando há um usuário cadastrado
E digitar um e-mail diferente do cadastrado
E digitar a senha
E confirmar a operação
Então o sistema retorna mensagem de falha no login

@cadastroUsuario
Cenário: Não deve ser possível logar com senha incorreta
Quando há um usuário cadastrado
E digitar o e-mail
E digitar a senha incorreta
E confirmar a operação
Então o sistema retorna mensagem de falha no login

Cenário: Não deve ser possível logar com usuário não cadastrado
Quando digitar um e-mail não cadastrado
E digitar uma senha não cadastrada
E confirmar a operação
Então o sistema retorna mensagem de falha no login


