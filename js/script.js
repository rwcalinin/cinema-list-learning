'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Скотт Пилигрим против...",
            "Гарри Поттер",
            "Пятый элемент"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        favFilmCheck = document.querySelector('#fav-film-check'),
        addFilm = document.querySelector('#add-film');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    movieDB.movies.sort();

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} - ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
             btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
             });
        });

    }

    // add-film

    let filmInput;

    addFilm.addEventListener('click', (event) => {

        event.preventDefault();
        filmInput = document.querySelector('#adding-input');

        if (!filmInput.value) {
            alert('Неверное значение фильма, заполните снова');

        } else {
            if (filmInput.value.length > 21) {
                filmInput.value = `${filmInput.value.substring(0,21)}...`;

            }
            if (favFilmCheck.checked) {
                console.log(`Добавляем любимый фильм в коллекцию: ${filmInput.value}`);

            }
            movieDB.movies.push(filmInput.value);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        filmInput.value = '';
    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});

// !


// const btn = document.querySelector('.promo__genre');

// btn.onclick = function() {
//     alert("2");
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// let i = 0;

// const deleteElement = (event) => {
//     event.target.remove();
//     console.log(event.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('mouseenter', deleteElement);
//     }
// }

// btn.addEventListener('mouseenter', deleteElement);

// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event.target);
// });