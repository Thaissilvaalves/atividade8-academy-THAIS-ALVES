# language: pt

Funcionalidade: Gerenciar conta

Contexto: Usuário deve acessar a funcionalidade de gerenciar conta
Dado que acessei a funcionalidade de gerenciamento de conta

Cenário: Deve ser possível visualizar os dados do usuário
Então é possível visualizar os dados relevantes do perfil

Cenário: Deve ser possível alterar nome
Quando alterar o nome
E confirmar a operação
Então o usuário deverá ser atualizado com sucesso

Cenário: Deve ser possível alterar senha
Quando alterar a senha
E confirmar a nova senha
E confirmar a operação
Então o usuário deverá ser atualizado com sucesso

Cenário: Deve ser possível cancelar a tentativa de alterar senha
Quando iniciar o processo de alteração de senha
E desejar cancelar a operação
Então a operação deverá ser cancelada

Cenário: Não deve ser possível alterar senha sem confirmar a senha principal
Quando alterar a senha
E confirmar a operação
Então o sistema deverá retornar uma mensagem de alerta

Cenário: Não deve ser possível alterar a senha com a confirmação de senha divergentes
Quando alterar a senha
E confirmar a nova senha divergente
E confirmar a operação
Então o sistema deverá retornar uma mensagem de alerta

Esquema do Cenário: Não deve ser possível alterar senha com menos de 6 caracteres
Quando alterar a senha "<senha>"
E confirmar a nova senha "<confirmarSenha>"
E confirmar a operação
Então deverá aparecer o alerta do limite de caracteres "<alerta>"
Exemplos: 
        |          senha       |  confirmarSenha    |          alerta                        |  
        |          11111       |        11111       | A senha deve ter pelo menos 6 dígitos. |                                   
        |          11111       |     11111          | A senha deve ter pelo menos 6 dígitos. |      
        |          1111        |          1111      | A senha deve ter pelo menos 6 dígitos. |
        |          111         |          111       | A senha deve ter pelo menos 6 dígitos. |
        |          11          |          11        | A senha deve ter pelo menos 6 dígitos. |
        |          1           |          1         | A senha deve ter pelo menos 6 dígitos. |
        
Cenário: Não deve ser possível cadastrar uma senha com 13 caracteres
Quando alterar a senha "1111111111111"
E confirmar a nova senha "1111111111111"
E confirmar a operação
Então deverá aparecer uma mensagem de erro