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

# Cenário: Não deve ser possível logar sem digitar o e-mail
# Quando há um usuário cadastrado
# E digitar a senha
# E confirmar a operação
# Então não é possível logar 

# Cenário: Não deve ser possível logar com e-mail diferente do cadastrado
# Quando há um usuário cadastrado
# E digitar um e-mail diferente do cadastrado
# E digitar a senha
# E confirmar a operação
# Então não é possível logar

# Cenário: Não deve ser possível logar com senha incorreta
# Quando há um usuário cadastrado
# E digitar a senha incorreta
# E confirmar a operação
# Então não é possível logar

# Cenário: Não deve ser possível logar com usuário não cadastrado
# Quando o usuário não está cadastrado
# Então não é possível logar


