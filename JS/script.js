const numberOfilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');

const personalmovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

const a = prompt('Сколько фильмов вы уже посмотрели?' , ''),
      b = prompt('На сколько оцените его?' , ''),
      c = prompt('Один из последних просмотренных фильмов?' , ''),
      d = prompt('На сколько оцените его?' , '');


      personalmovieDB.movies[a] = b;
      personalmovieDB.movies[c] = d;

      console.log(personalmovieDB);
