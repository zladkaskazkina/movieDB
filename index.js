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

//delete ads block
const adv = document.querySelectorAll('.promo__adv img');
const deleteAds = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};
deleteAds(adv);

//change background image
const poster = document.querySelector('.promo__bg');
poster.style.backgroundImage = 'url("img/bg.jpg")';


//change text one genre in html
const changedGenre = poster.querySelector('.promo__genre');
changedGenre.textContent = 'Drama';

//sort movies
const sortArr = (arr) => {
    arr.sort();
};

const movieList = document.querySelector('.promo__interactive-list');

function createMovieList(films, parent) {
    //clean movies list
    parent.innerHTML = '';
    //sort the list
    sortArr(films);
    //add movies from object list
    films.forEach((film, i) => {
        parent.innerHTML += `
                        <li class="promo__interactive-item">
                            ${i + 1}. ${film}
                            <div class="delete"></div>
                        </li>`;
    });
    //delete elements when you click on trash
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, movieList); //recursion
        });
    });
}
createMovieList(movieDB.movies, movieList);

//add new film to array
const addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkForm = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const favorite = checkForm.checked;
    if (addInput.value) {
        if (favorite) {
            console.log('favorite!');
        }
        if (addInput.value.length > 21) {
            addInput.value = `${addInput.value.substring(0, 22)}...`;
        }

        movieDB.movies.push(addInput.value);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
    }
    event.target.reset(); //clean the input
});


