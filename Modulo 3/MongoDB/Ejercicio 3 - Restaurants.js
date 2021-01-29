// Ejercicio 3
// Apartado 1
db.restaurants.find().pretty();
// Apartado 2
db.restaurants.find({},{
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1}).pretty();
// Apartado 3
db.restaurants.find({},{
    "_id": 0,
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1}).pretty();
// Apartado 4
db.restaurants.find({},{
    "_id": 0,
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "address.zipcode": 1}).pretty();
// Apartado 5
db.restaurants.find({"borough": "Bronx"}).pretty();
// Apartado 6
db.restaurants.find({"borough": "Bronx"}).limit(5).pretty();
// Apartado 7
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5).pretty();
// Apartado 8
db.restaurants.find(
    {
        "grades": {$elemMatch: {"score": {$gt: 90}}}
    }
).pretty();
// Alternativa
db.restaurants.find(
    {
        "grades.score": {$gt: 90}
    }
).pretty();
// Apartado 9
db.restaurants.find(
    {"grades.score": {$gt: 80, $lt: 100}}
).pretty();
// Apartado 10
db.restaurants.find(
    {"address.coord.0": {$lt: -95.754168}}
).pretty();
// Apartado 11
db.restaurants.find({$and: [{"cuisine": {$not: /American/}}, {"grades": {$elemMatch: {"score": {$gt: 70}}}}, {"address.coord.0": {$lt: -65.754168}}]}).pretty();
// Apartado 12
db.restaurants.find({"cuisine": {$not: /American/}, "grades": {$elemMatch: {"score": {$gt: 70}}}, "address.coord.1": {$lt: -65.754168}}).pretty();
// Apartado 13
db.restaurants.find({"cuisine": {$not: /American/}, "grades": {$elemMatch: {"grade": "A"}}, "borough": {$not: /Brooklyn/}}).sort({"cuisine": -1}).pretty();
// Apartado 14
db.restaurants.find({"name": /^Wil/},
{
    "_id": 0,
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1
}).pretty();
// Apartado 15
db.restaurants.find({"name": /ces$/},
{
    "_id": 0,
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1
}).pretty();
// Apartado 16
db.restaurants.find({"name": /.*Reg.*/},
{
    "_id": 0,
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1
}).pretty();
// Apartado 17
db.restaurants.find({"borough": "Bronx", "cuisine": /American|Chinese/}).pretty();
// con $or:
db.restaurants.find({
        "borough": "Bronx",
        $or: [
                {"cuisine": "American"},
                {"cuisine": "Chinese"}
            ]
    }).pretty();
// Apartado 18
db.restaurants.find(
    {
        "borough": {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
    },

    {
        "_id": 0,
        "restaurant_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
    ).pretty();
// Apartado 19
db.restaurants.find(
    {
        "borough": {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
    },

    {
        "_id": 0,
        "restaurant_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1
    }
    ).pretty();
    // Apartado 20
