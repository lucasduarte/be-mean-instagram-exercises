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
**1. Cadastre 10 usuários diferentes**
```
for(i = 0; i<10; i++) {
	var user = {
		"name":	"User " + i,
		"bio": "Bio",
		"date-register": new Date(),
		"avatar-path": i + ".png",
		"background-path": i + "-bg.png",
	}
	
	db.users.insert(user);
}

Inserted 1 record(s) in 23ms
Inserted 1 record(s) in 1ms
Inserted 1 record(s) in 0ms
Inserted 1 record(s) in 1ms
Inserted 1 record(s) in 1ms
Inserted 1 record(s) in 1ms
Inserted 1 record(s) in 1ms
Inserted 1 record(s) in 1ms
Inserted 1 record(s) in 1ms
Inserted 1 record(s) in 1ms

```
**2. Cadastre 5 projetos diferentes**
```
//Cadastrando primeiramente as activities
for(i = 0; i<2; i++) {
	var activity = {
	    "name": "Activity " + i,
	    "description": "Description",
	    "date-begin": new Date(),
	    "date-dream": new Date() + 10,
	    "date-end": new Date() + 20,
	    "realocate": false,
	    "expired": new Date() + 50,
	    "tags": [],
	    "members": [],
	    "historic": [],
	    "comments": []
	}
	
	db.activities.insert(activity);
}

Inserted 1 record(s) in 17ms
Inserted 1 record(s) in 1ms




projeto1 = {
	"name": "Fora Dilma",
	"description": "Tirar a presidente do poder",
	"date-begin": Date.now(),
	"date-dream": Date.now() + 10,
	"date-end": Date.now() + 20,
	"visible": true,
	"realocate": false,
	"expired": Date.now() + 50,
	"visualizable_mod": "Teste",
	"tags": ["importante", "dilma", "presidente"]
	"members": [],
	"goals": [
		{
			"name": "Protesto",
			"description": "Protestar na praça",
			"date_begin": Date.now(),
			"date_dream": Date.now() + 10,
			"date_end": Date.now() + 20,
			"realocate": false
			"expired": Date.now() + 50,
			"tags":["fora", "dilma", "pt"]
			"activities": [
				{ "activity_id": activities[0]._id },
				{ "activity_id": activities[1]._id }]		
		}
	],
	"historic": []	
}

projeto2 = {
	"name": "Project2",
	"description": "Project Description",
	"date-begin": Date.now(),
	"date-dream": Date.now() + 10,
	"date-end": Date.now() + 20,
	"visible": true,
	"realocate": false,
	"expired": Date.now() + 50,
	"visualizable_mod": "Teste",
	"tags": ["importante", "saifora", "presidente"]
	"members": [],
	"goals": [
		{
			"name": "Protesto",
			"description": "Protestar na praça",
			"date_begin": Date.now(),
			"date_dream": Date.now() + 10,
			"date_end": Date.now() + 20,
			"realocate": false
			"expired": Date.now() + 50,
			"tags":["fora", "dilma", "pt"]
			"activities": [
				{ "activity_id": activities[0]._id },
				{ "activity_id": activities[1]._id }
			]			
		}
	],
	"historic": []	
}

projeto3 = {
	"name": "Project3",
	"description": "Project Description",
	"date-begin": Date.now(),
	"date-dream": Date.now() + 10,
	"date-end": Date.now() + 20,
	"visible": true,
	"realocate": false,
	"expired": Date.now() + 50,
	"visualizable_mod": "Teste",
	"tags": ["importante", "somedaqui", "nothing"]
	"members": [],
	"goals": [
		{
			"name": "Protesto",
			"description": "Protestar na praça",
			"date_begin": Date.now(),
			"date_dream": Date.now() + 10,
			"date_end": Date.now() + 20,
			"realocate": false
			"expired": Date.now() + 50,
			"tags":["fora", "dilma", "pt"]
			"activities": [
				{ "activity_id": activities[0]._id },
				{ "activity_id": activities[1]._id }
			]			
		}
	],
	"historic": []	
}

projeto4 = {
	"name": "Project4",
	"description": "Project Description",
	"date-begin": Date.now(),
	"date-dream": Date.now() + 10,
	"date-end": Date.now() + 20,
	"visible": true,
	"realocate": false,
	"expired": Date.now() + 50,
	"visualizable_mod": "Teste",
	"tags": ["tag1", "tag2", "tag3"]
	"members": [],
	"goals": [
		{
			"name": "Protesto",
			"description": "Protestar na praça",
			"date_begin": Date.now(),
			"date_dream": Date.now() + 10,
			"date_end": Date.now() + 20,
			"realocate": false
			"expired": Date.now() + 50,
			"tags":["fora", "dilma", "pt"]
			"activities": [
				{ "activity_id": activities[0]._id },
				{ "activity_id": activities[1]._id }
			]			
		}
	],
	"historic": []	
}

projeto5 = {
	"name": "Project5",
	"description": "Project Description",
	"date-begin": Date.now(),
	"date-dream": Date.now() + 10,
	"date-end": Date.now() + 20,
	"visible": true,
	"realocate": false,
	"expired": Date.now() + 50,
	"visualizable_mod": "Teste",
	"tags": ["tag4", "tag5", "tag6"]
	"members": [],
	"goals": [
		{
			"name": "Protesto",
			"description": "Protestar na praça",
			"date_begin": Date.now(),
			"date_dream": Date.now() + 10,
			"date_end": Date.now() + 20,
			"realocate": false
			"expired": Date.now() + 50,
			"tags":["fora", "dilma", "pt"]
			"activities": [
			]			
		}
	],
	"historic": []	
}



```

## Retrieve - busca

## Update - alteração

## Delete - remoção

## Sharding
// coloque aqui todos os comandos que você executou

## Replica
// coloque aqui todos os comandos que você executou
