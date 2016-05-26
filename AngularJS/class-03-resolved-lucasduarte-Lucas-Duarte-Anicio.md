# AngularJS 1.5.x - Aula 03 - Exercício  
**user:** [lucasduarte](https://github.com/lucasduarte)  
**autor:** Lucas Duarte Anício

## Os 2 exercícios estão no mesmo HTML abaixo:
  - Crie 1 controller de Professores, seguindo o padrão ensinado.
  - Utilizar algum filtro da aula passada em algum dos valores.
  
```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="ProfessorController as Professor">
  <h1>{{Professor.curso}}</h1>
  <ul>
    <li data-ng-repeat="professor in Professor.professores">
      {{ professor.name }} - {{ professor.idade }} anos - {{ professor.idade | filtroIdade}}
    </li>
  </ul>

  <script src="angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('ProfessorController', ProfessorController)
      .filter('filtroIdade', filtroIdade);

    function ProfessorController() {
      var vm = this;
      vm.curso = "Be MEAN";
      vm.professores = [
        {name: 'João', idade: 27}
      , {name: 'Lucas', idade: 24}
      , {name: 'Marcos', idade: 17} 
      ]
    }

    function filtroIdade () {
      return function(idade) {
        if (idade && !isNaN(idade)) {
          if(idade >= 18) {
            return "Maior de 18 anos";
          } else {
            return "Menor de 18 anos";
          }
        } else {
            return "Idade Inválida!";
        }
      }
    }
  </script>
</body>
</html>
```
