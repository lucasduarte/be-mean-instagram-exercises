# MongoDb - Artigo sobre Autenticação no MongoDb
**Autor:** Lucas Duarte Anício
**Data** 1456487947737

## Qual a diferença entre Autenticação e Autorização?
A autenticação tem a função de identificação do usuário, ou seja, verifica quem você é, já a autorização tem o papel de verificar quais recursos ou ações o usuário está autorizado a acessar/executar.

## Descreva aqui o passo-a-passo como criar um usuário administrador e um usuário comum.
Usuário Administrador:
```
use admin
db.createUser(
  {
    user: "userAdmin",
    pwd: "secret",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
```

Usuário Comum:
```
db.createUser({ user: "userComum",
  pwd: "secret",
  roles: []
})
```

## Explique cada papel listado em Cluster Administration Roles.

 - **clusterAdmin**
 É o role com mais acessos garantidos para o gerenciamento de cluster. Combina todos os privilégios dos roles 'clusterManager', 'clusterMonitor' e 'hostManager'.
 - **clusterManager**
 Permite o gerenciamento e monitoramento de ações no cluster. Permite acesso as databases **config** e **local**.
 - **clusterMonitor**
 Permite acesso de somente leitura as ferramentas de monitoramento.
 - **hostManager**
 Garante ao usuário as permissões para monitorar e gerenciar o servidor. 

## Explique todas as ações de privilégio listadas em Privilege Actions.

 1. **find**
 O usuário pode executar o comando `db.collection.find()` para buscar dados na database.
 2. **insert**
 Permite ao usuário executar o comando `insert` para inserir dados em uma collection.
 3. **remove**
 Permite ao usuário executar o comando `db.collection.remove()` para remover itens de uma collection.
 4. **update**
 Permite ao usuário executar o comando `update` para atualizar registros de uma collection.
