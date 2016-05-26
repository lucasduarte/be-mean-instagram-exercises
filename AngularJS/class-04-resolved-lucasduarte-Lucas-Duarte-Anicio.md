
# AngularJS 1.5.x - Aula 04 - Exercício  
**user:** [lucasduarte](https://github.com/lucasduarte)  
**autor:** Lucas Duarte Anicio

##Todos os exercícios estão resolvidos no mesmo html
- 1)Adicionar mais 1 campo em todos os controllers e utiliza-lo em orderBy
- 2)Utilizar esse valor adicional no ng-init para cada ng-repeat da View
- 3)Criar um campo de filtro para cada ng-repeat
```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="utf-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">
  <span data-ng-init="predicate = 'idade'; reverse = false"></span>
  <h2>Users</h2>
  <label>Busca: <input type="text" data-ng-model="searchUser"></label>
  <table>
    <thead>
      <tr>
        <th data-ng-repeat="(key, value) in User.users[0]">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr data-ng-repeat="user in User.users | orderBy:predicate | filter:searchUser">
        <td data-ng-repeat="(key, value) in user">{{ value }}</td>
      </tr>
    </tbody>
  </table>
  <div data-ng-controller="ProfessorController as Professor">
    <h2>Professores</h2>
    <label>Busca: <input type="text" data-ng-model="searchProfessor"></label>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Professor.users[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="professor in Professor.users | orderBy:predicate | filter:searchProfessor">
          <td data-ng-repeat="(key, value) in professor">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div data-ng-controller="CursoController as Curso">
    <h2>Cursos</h2>
    <label>Busca: <input type="text" data-ng-model="searchCurso"></label>
    <table>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in Curso.cursos[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="curso in Curso.cursos | orderBy:predicate | filter:searchCurso">
          <td data-ng-repeat="(key, value) in curso">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <script src="../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('ProfessorController', ProfessorController)
      .controller('CursoController', CursoController);

    function UserController() {
      var vm = this;
      vm.curso = "Be MEAN";
      vm.users = [
        {name: 'João', email: 'joao@joao.com', idade: 32}
      , {name: 'Lucas', email: 'lucas@lucas.com', idade: 18}
      , {name: 'Marcos', email: 'marcos@marcos.com', idade: 19} 
      ]
    }

    function ProfessorController() {
      var vm = this;
      vm.titulo = "Be MEAN - Usuários";
      vm.users = [
        {name: 'Suissa', email: 'suissera@webschool.io', idade: 35}
      , {name: 'João', email: 'joao@joao.com', idade: 42}
      , {name: 'Lucas', email: 'lucas@lucas.com', idade: 32} 
      ]
    }

    function CursoController() {
      var vm = this;
      vm.titulo = "Be MEAN - Cursos";
      vm.cursos = [
        {name: 'Be MEAN', teacher: 'Suissa', idade: 22}
      , {name: 'Leaning Machine', teacher: 'Ivan Gustavo', idade: 35}
      , {name: 'Laravel', teacher: 'Michael Douglas', idade: 55} 
      ]
    }

  </script>
</body>

</html>
```
