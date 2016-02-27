# MongoDb - Projeto Final
**Autor:** Lucas Duarte Anício
**Data** 1456491787525

## Para qual sistema você usaria o MogoDB (diferente desse)?
Para sistemas que possuem um grande fluxo de usuários e que necessitam de escalabilidade.
## Qual a modelagem da sua coleção de `users`?
```
users = {
	"name": String,
	"bio": String,
	"date-register": Date,
	"avatar-path": String,
	"background-path": String,
	"auth": {
		"username": String,
		"email": String,
		"password": String,
		"last-access": Date,
		"online": Boolean,
		"disabled": Boolean,
		"hash-token": String
	}	
}
```
## Qual a modelagem da sua coleção de `projects`?
```
projects = {
	"name": String,
	"description": String,
	"date_begin": Date,
	"date-dream": Date,
	"date-end": Date,
	"visible": Boolean,
	"realocate": Boolean,
	"expired": Date,
	"visualizable_mod": String,
	"tags": [],
	"members": [
		{
			"member_id": ObjectID(),
			"type_member": String,
			"notify": Boolean
		}
	]
	"goals": [
		{
			"name": String,
			"description": String,
			"date_begin": Date,
			"date_dream": Date,
			"date_end": Date,
			"realocate": Boolean,
			"expired": Date,
			"tags": [],
			"activities": [
				{
					"activity_id": ObjectID()
				}
			],
			"historic": [
				"date-realocate": Date
			]
		}
	]
}
```

## Qual a modelagem da sua coleção retirada de `projects`?
```
activity = {
	"name": String,
	"description": String,
	"date-begin": Date,
	"date-dream": Date,
	"date-end": Date,
	"realocate": Boolean,
	"expired": Date,
	"tags": [],
	"members": [
		{
			"user_id": ObjectID(),
			"notify": Boolean,
			"type-name": String"
		}
	],
	"historic": [
		{
			"date_realocate": Date
		}
	],
	"comments": [
		{
			"text": String,
			"date_comment": Date,
			"members": [
				{
					"member_id": ObjectID(),
					"notify": Boolean
				}
			],
			"files": [
				{
					"path": String,
					"weight": String,
					"name": String
				}
			]
		}
	]
}
```

## Create - cadastro
1. Cadastre 10 usuários diferentes
```
be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d1046d4372c4bb17034bb6"),
  "name": "Lucas Duarte Anicio",
  "bio": "Test bio",
  "date-register": 1456538718563,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "lucas",
    "password": "secret",
    "last-access": 1456538718563,
    "online": true,
    "disabled": false,
    "hash-token": "ancfdsif"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d1052d3c0da5159bc579b4"),
  "name": "Dilma Presidenta",
  "bio": "Toma",
  "date-register": 1456538920685,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "dilmae",
    "password": "secret",
    "last-access": 1456538920685,
    "online": true,
    "disabled": false,
    "hash-token": "ladra"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d105933c0da5159bc579b5"),
  "name": "Chico Cunha",
  "bio": "Mosquito desgraçado",
  "date-register": 1456539012495,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "chicao",
    "password": "secret",
    "last-access": 1456539012495,
    "online": true,
    "disabled": false,
    "hash-token": "ladrao"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d106133c0da5159bc579b6"),
  "name": "Lula Alma Honesta",
  "bio": "Eu não sei de nada",
  "date-register": 1456539095520,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "tentaculo",
    "password": "secret",
    "last-access": 1456539095520,
    "online": true,
    "disabled": false,
    "hash-token": "chulispa"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d1068b3c0da5159bc579b7"),
  "name": "Vera Verão",
  "bio": "Tchola",
  "date-register": 1456539272596,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "verao",
    "password": "secret",
    "last-access": 1456539272596,
    "online": true,
    "disabled": false,
    "hash-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d106e43c0da5159bc579b8"),
  "name": "Padre do Balão",
  "bio": "Que loucura cara",
  "date-register": 1456539362214,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "balao",
    "password": "secret",
    "last-access": 1456539362214,
    "online": true,
    "disabled": false,
    "hash-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d107093c0da5159bc579b9"),
  "name": "Caetano Veloso",
  "bio": "Como você é burro cara",
  "date-register": 1456539399117,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "burro",
    "password": "secret",
    "last-access": 1456539399117,
    "online": true,
    "disabled": false,
    "hash-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d1073e3c0da5159bc579ba"),
  "name": "David Brasil",
  "bio": "nada",
  "date-register": 1456539451588,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "brasil",
    "password": "secret",
    "last-access": 1456539451588,
    "online": true,
    "disabled": false,
    "hash-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d108053c0da5159bc579bb"),
  "name": "Chico Bioca",
  "bio": "E tudo maix",
  "date-register": 1456539650623,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "chicao",
    "password": "secret",
    "last-access": 1456539650623,
    "online": true,
    "disabled": false,
    "hash-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
  }
}

be-mean> db.users.insert(user)
be-mean> db.users.find(user)
{
  "_id": ObjectId("56d1088d3c0da5159bc579bc"),
  "name": "Jailson Pai de Familia",
  "bio": "Que delícia cara",
  "date-register": 1456539770040,
  "avatar-path": "avatar.png",
  "background-path": "bg.png",
  "auth": {
    "username": "ursao",
    "password": "secret",
    "last-access": 1456539770040,
    "online": true,
    "disabled": false,
    "hash-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
  }
}

```

## Retrieve - busca

## Update - alteração

## Delete - remoção

## Sharding
// coloque aqui todos os comandos que você executou

## Replica
// coloque aqui todos os comandos que você executou
