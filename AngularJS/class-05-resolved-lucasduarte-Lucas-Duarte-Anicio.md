# AngularJS 1.5.x - Aula 05 - Exercício  
**user:** [lucasduarte](https://github.com/lucasduarte)  
**autor:** Lucas Duarte Anicio

##Todos os exercícios estão resolvidos no mesmo html
- 1)Criar uma função para ordenar uma tabela a partie de uma coluna clicando em sua tr>th
- 2)Criar mais 1 controller para Teachers com form para adição, listagem e ordenação

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>
<body data-ng-controller="UserController as User">
  <h1>{{ User.titulo }}</h1>
  <label>Busca: <input ng-model="searchUser"></label>
  <p>
    <label>
      Nome:
      <input type="text" data-ng-model="form.User.name">
    </label>
    <br>
    <label>
      Email:
      <input type="email" data-ng-model="form.User.email">
    </label>
  </p>
  <button data-ng-click="User.addUser(form.User)">Add User</button>
  <span data-ng-init="predicate = 'name'; reverse = true; "></span>
  <table border=1>
      <thead>
        <tr>
          <th data-ng-repeat="(key, value) in User.users[0]"
              data-ng-click="User.orderByColumn(key)">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="user in User.users | orderBy:User.order | filter:searchUser ">
          <td data-ng-repeat="(key, value) in user">{{ value }}</td>
        </tr>
      </tbody>
    </thead>
  </table>

  <div data-ng-controller="TeacherController as Teacher">
    <h2>{{ Teacher.titulo }}</h2>
    <label>Busca: <input ng-model="searchTeacher"></label>
    <p>
      <label>
        Nome:
        <input type="text" data-ng-model="form.Teacher.name">
      </label>
      <br>
      <label>
        Idade:
        <input type="number" data-ng-model="form.Teacher.idade">
      </label>
    </p>
    <button data-ng-click="Teacher.addTeacher(form.Teacher)">Add Teacher</button>
    <table border=1>
        <thead>
          <tr>
            <th data-ng-repeat="(key, value) in Teacher.teachers[0]"
                data-ng-click="Teacher.orderByColumn(key)">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr data-ng-repeat="teacher in Teacher.teachers | orderBy:Teacher.order | filter:searchTeacher ">
            <td data-ng-repeat="(key, value) in teacher">{{ value }}</td>
          </tr>
        </tbody>
      </thead>
    </table>
  </div>

  <script src="./../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('UserController', UserController)
      .controller('TeacherController', TeacherController);

    function UserController() {
      var vm = this;
      vm.titulo = "Be MEAN - Usuários";
      vm.users = [
        {name: 'Suissa', email: 'asuissera@manoveio.com'}
      , {name: 'João', email: 'bjoao@macioesedoso.com'}
      , {name: 'Franciele', email: 'cfran@quimica.com'}
      ];

      vm.order = 'name';
      vm.orderByColumn = orderByColumn;
      function orderByColumn(column) {
        vm.order = column;
      }

      vm.addUser = addUser;
      function addUser (user) {
        vm.users.push(user);
      }
    }

    function TeacherController() {
      var vm = this;
      vm.titulo = "Be MEAN - Teachers";
      vm.teachers = [
        {name: 'Lucas', idade: 17}
      , {name: 'Pedro', idade: 29}
      , {name: 'Rafael', idade: 15}
      ];

      vm.order = 'name';
      vm.orderByColumn = orderByColumn;
      function orderByColumn(column) {
        vm.order = column;
      }

      vm.addTeacher = addTeacher;
      function addTeacher (teacher) {
        vm.teachers.push(teacher);
      }
    }
  </script>
</body>
</html>
```
