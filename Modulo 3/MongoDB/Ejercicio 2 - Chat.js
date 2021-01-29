// Ejercicio 2 - Chat

db.users.insertMany(
    [
        {   username: "Twilightingale",
            email: "twl@gmail.com",
            password: "****",
            birthday: Date("2019-01-01"),
            last_login: new Date(),
            state: {
                online: true,
                available: false
            },
            contacts: []
        },
        {   username: "BubblyTurtle",
            email: "bubbl@gmail.com",
            password: "****",
            birthday: Date("2019-01-01"),
            last_login: new Date(),
            state: {
                online: true,
                available: false
            },
            contacts: []
        },
        {   username: "FlameSphinx",
            email: "flamesphinx@gmail.com",
            password: "****",
            birthday: Date("2019-01-01"),
            last_login: new Date(),
            state: {
                online: true,
                available: false
            },
            contacts: []
        },
        {   username: "MadMoose",
            email: "madmoose@gmail.com",
            password: "****",
            birthday: Date("2019-01-01"),
            last_login: new Date(),
            state: {
                online: false,
                available: false
            },
            contacts: []
        },
    ]
)

db.chats.insertMany(
    [
        {   members: [users[0]._id, users[1]._id],
            messages: [
                {
                    from:users[0]._id,
                    body: "Hola, buenos días.",
                    created_at: new Date()
                },
                {
                    from:users[1]._id,
                    body: "Buenas tardes ya.",
                    created_at: new Date()
                },
                {
                    from:users[0]._id,
                    body: "Es que me acabo de levantar.",
                    created_at: new Date()
                }
            ]
        },
        {   members: [users[1]._id, users[2]._id, users[3]._id],
            messages: [
                {
                    from:users[1]._id,
                    body: `Hola, soy ${users[1].username}`,
                    created_at: new Date()
                },
                {
                    from:users[2]._id,
                    body: `Hola, soy ${users[2].username}`,
                    created_at: new Date()
                },
                {
                    from:users[3]._id,
                    body: `Hola, soy ${users[3].username}`,
                    created_at: new Date()
                }
            ]
        },
    ]
)
db.users.find({"state.online": true, "state.available": true}).pretty();

db.users.update({},
{
  $set: {
        last_login: new Date(),
        "state.online": true
  }
}, false, true)

db.chats.find({"members": [users[1]._id, users[2]._id, users[3]._id]}, {"messages.body":1}).pretty();
db.chats.find({"members": {$size: 3}}).pretty();