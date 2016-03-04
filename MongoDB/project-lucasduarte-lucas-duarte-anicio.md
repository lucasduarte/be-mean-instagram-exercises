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



//1 Tag em dois projetos
for(var i=0; i<2; i++){
    var project = {
    	"name": "Project" + i,
    	"description": "Description",
    	"date-begin": new Date(),
    	"date-dream": new Date(),
    	"date-end": new Date(),
    	"visible": true,
    	"realocate": false,
    	"expired": new Date(),
    	"visualizable_mod": "Teste",
    	"tags": ["Tag1", "random" + i, "anothertag" + i],
    	"members": [ db.users.aggregate([{ $sample: { size:5 }}]) ],
    	"historic": [ ],
    	"goals": [{
			"name": "goal",
			"description": "description",
			"date_begin": new Date(),
			"date_dream": new Date(),
			"date_end": new Date(),
			"realocate": false,
			"expired": new Date(),
			"tags":["tag1", "tag2", "tag3"],
			"activities": [ db.activities.aggregate([{ $sample: { size:2 }}]) ]	
    	}]
    }
    
    db.projects.insert(project);
}
Inserted 1 record(s) in 5ms
Inserted 1 record(s) in 1ms

//1 tag em 3 projetos e um projeto sem activity
for(var i=2; i<4; i++){
    var project = {
    	"name": "Project" + i,
    	"description": "Description",
    	"date-begin": new Date(),
    	"date-dream": new Date(),
    	"date-end": new Date(),
    	"visible": true,
    	"realocate": false,
    	"expired": new Date(),
    	"visualizable_mod": "Teste",
    	"tags": ["Tag2", "randomtag" + i, "anothertagrandom" + i],
    	"members": [ db.users.aggregate([{ $sample: { size:5 }}]) ],
    	"historic": [ ],
    	"goals": [{
			"name": "goal",
			"description": "description",
			"date_begin": new Date(),
			"date_dream": new Date(),
			"date_end": new Date(),
			"realocate": false,
			"expired": new Date(),
			"tags":["tag1", "tag2", "tag3"],
			"activities": [ 
			        db.activities.aggregate([{ $sample: { size:2 }}]) 
			 ]	
    	}]
    }
    
    db.projects.insert(project);
}
Inserted 1 record(s) in 1ms
Inserted 1 record(s) in 3ms

var project = {
   	"name": "Project5",
   	"description": "Description",
   	"date-begin": new Date(),
   	"date-dream": new Date(),
   	"date-end": new Date(),
   	"visible": true,
   	"realocate": false,
   	"expired": new Date(),
   	"visualizable_mod": "Teste",
   	"tags": ["Tag2", "randomtag5", "anothertagrandom5"],
   	"members": [ db.users.aggregate([{ $sample: { size:5 }}]) ],
   	"historic": [ ],
   	"goals": [{
		"name": "goal",
		"description": "description",
		"date_begin": new Date(),
		"date_dream": new Date(),
		"date_end": new Date(),
		"realocate": false,
		"expired": new Date(),
		"tags":["tag1", "tag2", "tag3"],
		"activities": [ 
		        
		 ]	
   	}]
}
db.projects.insert(project);
Inserted 1 record(s) in 1ms
```

## Retrieve - busca
**1. Liste as informações dos membros de 1 projeto específico que deve ser buscado pelo seu nome de forma a não ligar para maiúsculas e minúsculas.**
```
be-mean> db.projects.find({name: /project0/i}, {members: 1} );
{
  "_id": ObjectId("56d8cc1ff8b6cd6dd0bf7ea2"),
  "members": [
    {
      "waitedMS": NumberLong("0"),
      "result": [
        {
          "_id": ObjectId("56d60c198609f803e485e5f7"),
          "name": "User 6",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.013Z"),
          "avatar-path": "6.png",
          "background-path": "6-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f3"),
          "name": "User 2",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.010Z"),
          "avatar-path": "2.png",
          "background-path": "2-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f4"),
          "name": "User 3",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.010Z"),
          "avatar-path": "3.png",
          "background-path": "3-bg.png"
        },
        {
          "_id": ObjectId("56d60c188609f803e485e5f1"),
          "name": "User 0",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:36.986Z"),
          "avatar-path": "0.png",
          "background-path": "0-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f5"),
          "name": "User 4",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.011Z"),
          "avatar-path": "4.png",
          "background-path": "4-bg.png"
        }
      ],
      "ok": 1
    }
  ]
}
Fetched 1 record(s) in 2ms

```
**2. Liste todos os projetos com a tag que você escolheu para os 3 projetos em comum.**
```
be-mean> db.projects.find({tags: { $eq: 'Tag2' } })
{
  "_id": ObjectId("56d8cd1af8b6cd6dd0bf7ea4"),
  "name": "Project2",
  "description": "Description",
  "date-begin": ISODate("2016-03-03T23:47:38.794Z"),
  "date-dream": ISODate("2016-03-03T23:47:38.794Z"),
  "date-end": ISODate("2016-03-03T23:47:38.794Z"),
  "visible": true,
  "realocate": false,
  "expired": ISODate("2016-03-03T23:47:38.794Z"),
  "visualizable_mod": "Teste",
  "tags": [
    "Tag2",
    "randomtag2",
    "anothertagrandom2"
  ],
  "members": [
    {
      "waitedMS": NumberLong("0"),
      "result": [
        {
          "_id": ObjectId("56d60c198609f803e485e5f9"),
          "name": "User 8",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.015Z"),
          "avatar-path": "8.png",
          "background-path": "8-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f3"),
          "name": "User 2",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.010Z"),
          "avatar-path": "2.png",
          "background-path": "2-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f6"),
          "name": "User 5",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.012Z"),
          "avatar-path": "5.png",
          "background-path": "5-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f5"),
          "name": "User 4",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.011Z"),
          "avatar-path": "4.png",
          "background-path": "4-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f7"),
          "name": "User 6",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.013Z"),
          "avatar-path": "6.png",
          "background-path": "6-bg.png"
        }
      ],
      "ok": 1
    }
  ],
  "historic": [ ],
  "goals": [
    {
      "name": "goal",
      "description": "description",
      "date_begin": ISODate("2016-03-03T23:47:38.795Z"),
      "date_dream": ISODate("2016-03-03T23:47:38.795Z"),
      "date_end": ISODate("2016-03-03T23:47:38.795Z"),
      "realocate": false,
      "expired": ISODate("2016-03-03T23:47:38.795Z"),
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "activities": [
        {
          "waitedMS": NumberLong("0"),
          "result": [
            {
              "_id": ObjectId("56d613b98609f803e485e5fc"),
              "name": "Activity 1",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.667Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            },
            {
              "_id": ObjectId("56d613b98609f803e485e5fb"),
              "name": "Activity 0",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.650Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            }
          ],
          "ok": 1
        }
      ]
    }
  ]
}
{
  "_id": ObjectId("56d8cd1af8b6cd6dd0bf7ea5"),
  "name": "Project3",
  "description": "Description",
  "date-begin": ISODate("2016-03-03T23:47:38.797Z"),
  "date-dream": ISODate("2016-03-03T23:47:38.797Z"),
  "date-end": ISODate("2016-03-03T23:47:38.797Z"),
  "visible": true,
  "realocate": false,
  "expired": ISODate("2016-03-03T23:47:38.797Z"),
  "visualizable_mod": "Teste",
  "tags": [
    "Tag2",
    "randomtag3",
    "anothertagrandom3"
  ],
  "members": [
    {
      "waitedMS": NumberLong("0"),
      "result": [
        {
          "_id": ObjectId("56d60c198609f803e485e5f9"),
          "name": "User 8",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.015Z"),
          "avatar-path": "8.png",
          "background-path": "8-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f2"),
          "name": "User 1",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.009Z"),
          "avatar-path": "1.png",
          "background-path": "1-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5fa"),
          "name": "User 9",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.016Z"),
          "avatar-path": "9.png",
          "background-path": "9-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f7"),
          "name": "User 6",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.013Z"),
          "avatar-path": "6.png",
          "background-path": "6-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f4"),
          "name": "User 3",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.010Z"),
          "avatar-path": "3.png",
          "background-path": "3-bg.png"
        }
      ],
      "ok": 1
    }
  ],
  "historic": [ ],
  "goals": [
    {
      "name": "goal",
      "description": "description",
      "date_begin": ISODate("2016-03-03T23:47:38.798Z"),
      "date_dream": ISODate("2016-03-03T23:47:38.798Z"),
      "date_end": ISODate("2016-03-03T23:47:38.798Z"),
      "realocate": false,
      "expired": ISODate("2016-03-03T23:47:38.798Z"),
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "activities": [
        {
          "waitedMS": NumberLong("0"),
          "result": [
            {
              "_id": ObjectId("56d613b98609f803e485e5fb"),
              "name": "Activity 0",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.650Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            },
            {
              "_id": ObjectId("56d613b98609f803e485e5fc"),
              "name": "Activity 1",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.667Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            }
          ],
          "ok": 1
        }
      ]
    }
  ]
}
{
  "_id": ObjectId("56d8cd48f8b6cd6dd0bf7ea6"),
  "name": "Project5",
  "description": "Description",
  "date-begin": ISODate("2016-03-03T23:48:23.372Z"),
  "date-dream": ISODate("2016-03-03T23:48:23.372Z"),
  "date-end": ISODate("2016-03-03T23:48:23.372Z"),
  "visible": true,
  "realocate": false,
  "expired": ISODate("2016-03-03T23:48:23.372Z"),
  "visualizable_mod": "Teste",
  "tags": [
    "Tag2",
    "randomtag5",
    "anothertagrandom5"
  ],
  "members": [
    {
      "waitedMS": NumberLong("0"),
      "result": [
        {
          "_id": ObjectId("56d60c198609f803e485e5fa"),
          "name": "User 9",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.016Z"),
          "avatar-path": "9.png",
          "background-path": "9-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f4"),
          "name": "User 3",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.010Z"),
          "avatar-path": "3.png",
          "background-path": "3-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f5"),
          "name": "User 4",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.011Z"),
          "avatar-path": "4.png",
          "background-path": "4-bg.png"
        },
        {
          "_id": ObjectId("56d60c198609f803e485e5f2"),
          "name": "User 1",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:37.009Z"),
          "avatar-path": "1.png",
          "background-path": "1-bg.png"
        },
        {
          "_id": ObjectId("56d60c188609f803e485e5f1"),
          "name": "User 0",
          "bio": "Bio",
          "date-register": ISODate("2016-03-01T21:39:36.986Z"),
          "avatar-path": "0.png",
          "background-path": "0-bg.png"
        }
      ],
      "ok": 1
    }
  ],
  "historic": [ ],
  "goals": [
    {
      "name": "goal",
      "description": "description",
      "date_begin": ISODate("2016-03-03T23:48:23.372Z"),
      "date_dream": ISODate("2016-03-03T23:48:23.372Z"),
      "date_end": ISODate("2016-03-03T23:48:23.372Z"),
      "realocate": false,
      "expired": ISODate("2016-03-03T23:48:23.372Z"),
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "activities": [ ]
    }
  ]
}
Fetched 3 record(s) in 6ms
```

**3. Liste apenas os nomes de todas as atividades para todos os projetos.**
```
be-mean> db.projects.find({}, {"goals.activities": 1})
{
  "_id": ObjectId("56d8cc1ff8b6cd6dd0bf7ea2"),
  "goals": [
    {
      "activities": [
        {
          "waitedMS": NumberLong("0"),
          "result": [
            {
              "_id": ObjectId("56d613b98609f803e485e5fb"),
              "name": "Activity 0",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.650Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            },
            {
              "_id": ObjectId("56d613b98609f803e485e5fc"),
              "name": "Activity 1",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.667Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            }
          ],
          "ok": 1
        }
      ]
    }
  ]
}
{
  "_id": ObjectId("56d8cc1ff8b6cd6dd0bf7ea3"),
  "goals": [
    {
      "activities": [
        {
          "waitedMS": NumberLong("0"),
          "result": [
            {
              "_id": ObjectId("56d613b98609f803e485e5fc"),
              "name": "Activity 1",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.667Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            },
            {
              "_id": ObjectId("56d613b98609f803e485e5fb"),
              "name": "Activity 0",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.650Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            }
          ],
          "ok": 1
        }
      ]
    }
  ]
}
{
  "_id": ObjectId("56d8cd1af8b6cd6dd0bf7ea4"),
  "goals": [
    {
      "activities": [
        {
          "waitedMS": NumberLong("0"),
          "result": [
            {
              "_id": ObjectId("56d613b98609f803e485e5fc"),
              "name": "Activity 1",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.667Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            },
            {
              "_id": ObjectId("56d613b98609f803e485e5fb"),
              "name": "Activity 0",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.650Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            }
          ],
          "ok": 1
        }
      ]
    }
  ]
}
{
  "_id": ObjectId("56d8cd1af8b6cd6dd0bf7ea5"),
  "goals": [
    {
      "activities": [
        {
          "waitedMS": NumberLong("0"),
          "result": [
            {
              "_id": ObjectId("56d613b98609f803e485e5fb"),
              "name": "Activity 0",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.650Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            },
            {
              "_id": ObjectId("56d613b98609f803e485e5fc"),
              "name": "Activity 1",
              "description": "Description",
              "date-begin": ISODate("2016-03-01T22:12:09.667Z"),
              "date-dream": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)10",
              "date-end": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)20",
              "realocate": false,
              "expired": "Tue Mar 01 2016 19:12:09 GMT-0300 (BRT)50",
              "tags": [ ],
              "members": [ ],
              "historic": [ ],
              "comments": [ ]
            }
          ],
          "ok": 1
        }
      ]
    }
  ]
}
{
  "_id": ObjectId("56d8cd48f8b6cd6dd0bf7ea6"),
  "goals": [
    {
      "activities": [ ]
    }
  ]
}
Fetched 5 record(s) in 4ms
```

**4. Liste todos os projetos que não possuam uma tag.**
```
be-mean> db.projects.find({ tags: [] })
```

**5. Liste todos os usuários que não fazem parte do primeiro projeto cadastrado.**
```
be-mean> var users = db.projects.find({name: /Project0/}, {"members._id": 1, _id: 0})
be-mean> db.users.find({ _id: { $not: { $in: users } } })
{
  "_id": ObjectId("56d60c198609f803e485e5f2"),
  "name": "User 1",
  "bio": "Bio",
  "date-register": ISODate("2016-03-01T21:39:37.009Z"),
  "avatar-path": "1.png",
  "background-path": "1-bg.png"
}
{
  "_id": ObjectId("56d60c198609f803e485e5f6"),
  "name": "User 5",
  "bio": "Bio",
  "date-register": ISODate("2016-03-01T21:39:37.012Z"),
  "avatar-path": "5.png",
  "background-path": "5-bg.png"
}
{
  "_id": ObjectId("56d60c198609f803e485e5f8"),
  "name": "User 7",
  "bio": "Bio",
  "date-register": ISODate("2016-03-01T21:39:37.014Z"),
  "avatar-path": "7.png",
  "background-path": "7-bg.png"
}
{
  "_id": ObjectId("56d60c198609f803e485e5f9"),
  "name": "User 8",
  "bio": "Bio",
  "date-register": ISODate("2016-03-01T21:39:37.015Z"),
  "avatar-path": "8.png",
  "background-path": "8-bg.png"
}
{
  "_id": ObjectId("56d60c198609f803e485e5fa"),
  "name": "User 9",
  "bio": "Bio",
  "date-register": ISODate("2016-03-01T21:39:37.016Z"),
  "avatar-path": "9.png",
  "background-path": "9-bg.png"
}
Fetched 5 record(s) in 1ms

```

## Update - alteração

**1. Adicione para todos os projetos o campo views: 0.**
```
be-mean> db.projects.update({}, { $set: {views: 0} }, { multi: true} )
Updated 5 existing record(s) in 1ms
WriteResult({
  "nMatched": 5,
  "nUpserted": 0,
  "nModified": 5
})

```
**2. Adicione 1 tag diferente para cada projeto.**
```
var number = 0;
var projects = db.projects.find();
projects.forEach(function(project){
    var query = { "_id": project._id} ;
    var mod = { $push: { "tags": "TagNova" + ++number } }
    db.projects.update(query, mod);
})
Updated 1 existing record(s) in 6ms
Updated 1 existing record(s) in 0ms
Updated 1 existing record(s) in 0ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
```
**3. Adicione 2 membros diferentes para cada projeto.**
```
var projects = db.projects.find();
projects.forEach(function(project){
    var query = { "_id": project._id} ;
    var members = db.users.aggregate([{$sample: {size: 2}}]).result
    var mod = { $push: { "members": members } }
    db.projects.update(query, mod);
})
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 1ms
Updated 1 existing record(s) in 2ms
Updated 1 existing record(s) in 1ms

```
**4. Adicione 1 comentário em cada atividade, deixe apenas 1 projeto sem.**
```

```
**5. Adicione 1 projeto inteiro com UPSERT.**
```

```

## Delete - remoção

**1. Apague todos os projetos que não possuam tags.**
```

```
**2. Apague todos os projetos que não possuam comentários nas atividades.**
```

```
**3. Apague todos os projetos que não possuam atividades.**
```

```
**4. Escolha 2 usuário e apague todos os projetos em que os 2 fazem parte.**
```

```
**5. Apague todos os projetos que possuam uma determinada tag em goal.**
```

```

## Gerenciamento de usuários

**1. Crie um usuário com permissões APENAS de Leitura.**
```

```
**2. Crie um usuário com permissões de Escrita e Leitura.**
```

```
**3. Adicionar o papel grantRolesToUser e revokeRole para o usuário com Escrita e Leitura.**
```

```
**4. Remover o papel grantRolesToUser para o usuário com Escrita e Leitura.**
```

```
**5. Listar todos os usuários com seus papéis e ações.**
```

```

## Cluster

1 Router
1 Config Server
3 Shardings
3 Replicas
