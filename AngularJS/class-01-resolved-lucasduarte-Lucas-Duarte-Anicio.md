# AngularJS 1.5.x - Aula 01 - Exercício  
**user:** [lucasduarte](https://github.com/lucasduarte)  
**autor:** Lucas Duarte Anicio


## 1 - Explique qual a definição de MVC, MVVM e MVP. 
MVC: Model - View - Controller - Separação de responsabilidades onde o controller manipula os dados que são representados na view que é o espelho do model.
MVVM: Model - View - View - Model
MVP: Model - View - Presenter

## 2 - Crie uma aplicação com um nome e um form onde os dados colocados neles sejam mostrados logo abaixo, **formatados**.
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>
<!-- Iniciando minha aplicação com ng-app -->
<body data-ng-app="BeMEAN">
  <div class="container">
         
    <div class="form-group">
        <label>Nome: </label>
        <input type="text" class="form-control" name="nome" data-ng-model="nome">
    </div>
    <div class="form-group">
        <label>CPF: </label>
        <input type="text" class="form-control" name="CPF" data-ng-model="CPF">
    </div>
    <div class="form-group">
        <label>Endereço: </label>
        <input type="text" class="form-control" name="endereco" data-ng-model="endereco">
    </div>
    <div class="form-group">
        <label>Telefone: </label>
        <input type="text" class="form-control" name="telefone" data-ng-model="telefone">
    </div>
    <div class="form-group">
        <label>Email: </label>
        <input type="email" class="form-control" name="email" data-ng-model="email">
    </div>
  
    <label>Dados Pessoais:</label> <br />
    {{ nome }} <br />
    {{ CPF }} <br />
    {{ endereco }} <br />
    {{ telefone }} <br />
    {{ email }} <br />
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
  </script>
</body>
</html>
```
