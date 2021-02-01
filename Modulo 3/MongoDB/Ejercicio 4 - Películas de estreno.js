// Introduzco en mi coleccióm "movies" un total de 10 películas (documentos), de las cuales sólo algunas son de estreno (upcoming).
db.movies.insertMany([
{
    "genre_ids": [
        14,
        28,
        12
    ],
    "upcoming": true,
    "original_title": "Wonder Woman 1984",
    "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
    "release_date": "2020-12-16",
    "title": "Wonder Woman 1984",
    "vote_average": 7.1,
    "IMDb_link": "https://www.imdb.com/title/tt7126948/"
},
{
    "genre_ids": [
        28,
        53,
        878
    ],
    "upcoming": true,
    "original_title": "Tenet",
    "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    "release_date": "2020-08-22",
    "title": "Tenet",
    "vote_average": 7.3,
    "IMDb_link": "https://www.imdb.com/title/tt6723592/"
},
{
    "genre_ids": [
        10751,
        12,
        14,
        16
    ],
    "upcoming": false,
    "original_title": "The Croods: A New Age",
    "overview": "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
    "release_date": "2020-11-25",
    "title": "The Croods: A New Age",
    "vote_average": 7.7,
    "IMDb_link": "https://www.imdb.com/title/tt2850386/"
},
{
    "genre_ids": [
        10751,
        14,
        12,
        35,
        27
    ],
    "upcoming": true,
    "original_title": "Roald Dahl's The Witches",
    "overview": "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
    "release_date": "2020-10-25",
    "title": "The Witches",
    "vote_average": 6.8,
    "IMDb_link": "https://www.imdb.com/title/tt0805647/"
},
{
    "genre_ids": [
        14,
        28,
        12
    ],
    "upcoming": false,
    "original_title": "Monster Hunter",
    "overview": "A portal transports Lt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",
    "release_date": "2020-12-03",
    "title": "Monster Hunter",
    "vote_average": 5.3,
    "IMDb_link": "https://www.imdb.com/title/tt6475714/"
},
{
    "genre_ids": [
        53,
        80
    ],
    "upcoming": true,
    "original_title": "The Little Things",
    "overview": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
    "release_date": "2021-01-27",
    "title": "The Little Things",
    "vote_average": 6.3,
    "IMDb_link": "https://www.imdb.com/title/tt10016180/"
},
{
    "genre_ids": [
        16,
        28,
        35
    ],
    "upcoming": true,
    "original_title": "Combat Wombat",
    "overview": "Maggie Diggins, a wombat turned Wonder Woman, unintentionally becomes the city's superhero after she begrudgingly saves a rookie superhero sugar glider from certain doom.",
    "release_date": "2020-10-15",
    "title": "Combat Wombat",
    "vote_average": 7.3,
    "IMDb_link": "https://www.imdb.com/title/tt9679528/"
},
{
    "genre_ids": [
        27,
        53,
        35,
        14
    ],
    "upcoming": true,
    "original_title": "Freaky",
    "overview": "A mystical, ancient dagger causes a notorious serial killer to magically switch bodies with a 17-year-old girl.",
    "release_date": "2020-11-12",
    "title": "Freaky",
    "vote_average": 6.8,
    "IMDb_link": "https://www.imdb.com/title/tt10919380/"
},
{
    "genre_ids": [
        28,
        53,
        80
    ],
    "upcoming": false,
    "original_title": "The Marksman",
    "overview": "Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.",
    "release_date": "2021-01-15",
    "title": "The Marksman",
    "vote_average": 7,
    "IMDb_link": "https://www.imdb.com/title/tt6902332/"
},
{
    "genre_ids": [
        27,
        35,
        28
    ],
    "upcoming": true,
    "original_title": "Yummy",
    "overview": "A young couple travels to a shabby Eastern European hospital for plastic surgery. The young woman wants a breast reduction. Her mother comes along for yet another face-lift. Wandering through an abandoned ward the boyfriend stumbles upon a young woman, gagged and strapped to an operating table; she is the result of an experimental rejuvenation treatment. He frees her, but does not realize he just caused the outbreak of a virus that will change doctors, patients and his mother-in-law into bloodthirsty zombies.",
    "release_date": "2019-12-13",
    "title": "Yummy",
    "vote_average": 6.6,
    "IMDb_link": "https://www.imdb.com/title/tt11054164/"
}
]);
//Queries
// Apartado 1 - Obtengo todas las películas de estreno.
db.movies.find({upcoming: true}, {title: 1, upcoming: 1}).pretty();
// Apartado 2 - Obtengo las películas de estreno con una puntuación mayor a 7.
db.movies.find({upcoming: true, "vote_average": {$gt: 7}}, {title: 1, upcoming: 1, "vote_average": 1}).pretty();
// Apartado 3 - Muestro sólo los títulos y descripciones de las 5 primeras películas. No necesitamos el _id.
db.movies.find({}, {"_id": 0, title: 1, overview: 1}).limit(5).pretty();
// Apartado 4 - Con un tamaño de página de 2 películas, obtengo la segunda página.
db.movies.find().skip(2).limit(2).pretty();
// Apartado 5 - Obtengo la 4º página.
db.movies.find().skip(6).limit(2).pretty();
// Apartado 6 - Cambio la propiedad de estreno (upcoming) a falso en todas las películas de 2020.
db.movies.update(
    {"release_date": /^2020-/},
    {
        $set: {
                upcoming: false
            }
    },
    false, // upsert: false
    true  // multi: true
    );
// Apartado 7 - Cuento las películas de estreno.
db.movies.find({upcoming: true}).count();
// Apartado 8 - Elimino las películas cuyo estreno fue antes de 2020.
db.movies.remove({"release_date": {$lt: "2020-01-01"}});
