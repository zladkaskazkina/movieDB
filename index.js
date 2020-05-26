'use strict';
console.log('hi!');
const movieDB = {
    movies: [
        "Logan",
        "Justice League",
        "La La Land",
        "Whiplash",
        "Scott Pilgrim"
    ]
};

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films have you seen in last month?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you seen in last month?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the last films that you have seen:'),
                b = prompt('Your score of this film:');
            //check if the answer is valid:
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--; // come back to one step and ask again
            }
        }
    },
    personalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You are not a fun of movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('You have seen as much movies as average american person');
        } else if (personalMovieDB.count > 30) {
            console.log('You really like to watch movies');
        } else {
            console.log('Probably, it is an error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Your favorite genre number ${i}`);
            if (genre == '' || genre == null) {
                console.log('You forgot to write the answer');
                i--;
            } else { personalMovieDB.genres[i - 1] = genre; }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i + 1} is ${item}`);
        });
    }

};
//delete ads block
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => {
    item.remove();
});

//change background image
const poster = document.querySelector('.promo__bg');
poster.style.backgroundImage = 'url("img/bg.jpg")';


//change text one genre in html
const changedGenre = poster.querySelector('.promo__genre');
changedGenre.textContent = 'Drama';

//clean movies list
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

//sort movies
movieDB.movies.sort();

//add movies from object list
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
                        <li class="promo__interactive-item">
                            ${i + 1}. ${film}
                            <div class="delete"></div>
                        </li>`;
});

