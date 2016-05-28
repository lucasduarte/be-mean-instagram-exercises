# AngularJS 1.5.x - Aula 07 - Exercício  
**user:** [lucasduarte](https://github.com/lucasduarte)  
**autor:** Lucas Duarte Anicio

##Fazer a função de save no Controller de professores e utilizar forEach em vez de map.

```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">
<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  <style>
    .wrapper {
      max-width: 600px;
      margin: 0 auto;
    }
  </style>
</head>
<body data-ng-controller="TeacherController as Teacher">

  <section class="row wrapper">
    <h1>{{ Teacher.titulo }}</h1>
    <p class="col s12">
      <label>
        <input type="text" data-ng-model="Teacher.form.name" placeholder="Name">
      </label>
      <br>
      <label>
        <input type="number" data-ng-model="Teacher.form.idade" placeholder="Idade">
      </label>
    </p>
    <button data-ng-click="Teacher.add(Teacher.form)" class="btn btn-large green waves-effect waves-light col s6" type="submit" name="action">Add
    <button data-ng-click="Teacher.save(Teacher.form)" class="btn btn-large blue waves-effect waves-light col s6" type="submit" name="action">Save
    </button>
    <span data-ng-init="predicate = 'name'; reverse = true; "></span>
    <table>
      <thead>
        <tr>
          <th colspan="4">
            <label>
              <input ng-model="searchTeacher" placeholder="Search">
            </label>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Idade</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr data-ng-repeat="teacher in Teacher.teachers | filter:searchTeacher ">
          <td>
            <input type="checkbox" id="teacher-{{$index}}" ng-model="teacher.selecionado" />
            <label for="teacher-{{$index}}"></label>
          </td>
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.idade }}</td>
          <td>
            <button data-ng-click="Teacher.edit(teacher, $index)" class="btn btn-large blue waves-effect waves-light col s12" type="submit" name="action">Edit
          </td>
        </tr>
      </tbody>
    </table>
    <button data-ng-click="Teacher.remove()" class="btn btn-large red waves-effect waves-light col s12" type="submit" name="action">Remove
    </button>
  </section>

  <script src="./../angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .controller('TeacherController', TeacherController);

    function TeacherController() {
      var vm = this;
      vm.titulo = "Be MEAN - Teachers";
      vm.teachers = [
        {name: 'Lucas', idade: 17}
      , {name: 'Pedro', idade: 29}
      , {name: 'Rafael', idade: 15}
      ];

      function getKeyLength() {
        return Object.keys(angular.copy(vm.teachers[0])).length;
      }
      vm.keysLength = getKeyLength();

      vm.order = 'name';
      vm.orderByColumn = orderByColumn;
      function orderByColumn(column) {
        vm.order = column;
      }

      vm.addTeacher = addTeacher;
      function addTeacher (teacher) {
        vm.teachers.push(teacher);
      }

      vm.remove = remove;
      function remove(teachers) {
        vm.teachers = angular.forEach(vm.teachers, function(row, index) {
          if(vm.teachers[index].selecionado) {
            vm.teachers.splice(index, 1);
          }
        })
      }

      vm.edit = edit;
      function edit (teacher, index) {
        vm.form = angular.copy(teacher);
        vm.form.index = index;
      }

      vm.save = save;
      function save (teacher) {
        vm.teachers = angular.forEach(vm.teachers, function(row, index) {
          if(index === teacher.index) {
            vm.teachers.splice(teacher.index, 1, teacher);
          }
        });
      }
    }
  </script>
</body>
</html>
```
