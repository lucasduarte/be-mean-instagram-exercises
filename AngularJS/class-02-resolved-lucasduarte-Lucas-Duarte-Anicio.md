# AngularJS 1.5.x - Aula 02 - Exercício  
**user:** [lucasduarte](https://github.com/lucasduarte)  
**autor:** Lucas Duarte Anício

## Os 3 exercícios estão no mesmo HTML abaixo:
  - Crie 1 exemplo para pelo menos 5 filtros padrões do Angular.
  - Crie 1 filtro novo onde você passe em um input a sua idade e ele diga se você é maior que 18 anos.
  - Crie 1 filtro que receba um horário e entre as 0:00 e 23:59 diga Bom dia // até 12:00 Boa tarde  // até 18:00 boa noite
```html
<!doctype html>
<html lang="en" data-ng-app="BeMEAN">

<head>
  <meta charset="UTF-8">
  <title>Be MEAN</title>
</head>

<body>
 <h1>Filtros</h1>
 <h2>Filtros padrões do Angular</h2>
  <div>
    <label for="uppercase">Filtro uppercase:
      <input type="text" data-ng-model="uppercase">
    </label>
    Filtro uppercase: {{ uppercase | uppercase}}
  </div>
  <br>
  <div>
    <label for="lowercase">Filtro lowercase:
      <input type="text" data-ng-model="lowercase">
    </label>
    Filtro lowercase: {{ lowercase | lowercase}}
  </div>
  <br>
  <div>
    <label for="uppercase">Filtro currency:
      <input type="text" data-ng-model="currency">
    </label>
    Filtro currency: {{ currency | currency}}
  </div>
  <br>
  <div>
    <label for="json">Filtro json:
      <input type="text" data-ng-model="json">
    </label>
    Filtro json: {{ json | json}}
  </div>
  <br>
  <div>
    <label for="limitTo">Filtro limitTo(2):
      <input type="text" data-ng-model="limitTo">
    </label>
    Filtro limitTo: {{ limitTo | limitTo:2}}
  </div>
  <br>
  
  <h2>Filtro Idade</h2>
  <div>
    <label for="idade">Sua Idade:
      <input type="text" data-ng-model="idade">
    </label>
    {{ idade | idade }}
  </div>
  <br>

  <h2>Filtro Horário</h2>
  <div>
    <label for="horario">Horário:
      <input type="time" data-ng-model="horario">
    </label>
    {{ horario | horario }}
  </div>
  <script src="angular.min.js"></script>
  <script>
    angular.module('BeMEAN', [])
      .filter('idade', function () {
        return function (text) {
          if (text && !isNaN(text)) {
            if(text >= 18) {
              return "Maior de 18 anos";
            } else {
              return "Menor de 18 anos";
            }
          } else {
            return "Informe um número";
          }
        }
      })
      .filter('horario', function() {
        return function(text) {
          if(text) {
            var hora = text.getHours();
            if(hora >=0 && hora <12) { return "Bom Dia!!" };
            if(hora >=12 && hora < 18) { return "Boa Tarde!!" };
            if(hora >= 18) { return "Boa Noite!!"};
          }
        }
      });
  </script>
</body>

</html>

```
