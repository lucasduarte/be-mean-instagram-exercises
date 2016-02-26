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

## Retrieve - busca

## Update - alteração

## Delete - remoção

## Sharding
// coloque aqui todos os comandos que você executou

## Replica
// coloque aqui todos os comandos que você executou
