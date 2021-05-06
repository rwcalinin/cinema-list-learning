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

    adv.forEach(item => {
        item.remove();
    });

    genre.textContent = 'Драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    movieDB.movies.sort();

    function createMovieList(films, parent) {
        parent.innerHTML = '';
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} - ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    }

    createMovieList(movieDB.movies, movieList);

    // add-film

    let filmInput;

    addFilm.addEventListener('click', (element) => {

        element.preventDefault();
        filmInput = document.querySelector('#adding-input');

        if (filmInput.value == '' || filmInput.value == undefined) {
            alert('Неверное значение фильма, заполните снова');

        } else {
            if (filmInput.value.length > 21) {
                filmInput.value = filmInput.value.substr(0, 21);
                filmInput.value += '...';

            }
            if (favFilmCheck.checked) {
                console.log(`Добавляем любимый фильм в коллекцию: ${filmInput.value}`);

            }
            movieDB.movies.push(filmInput.value);
            movieList.innerHTML += `
                <li class="promo__interactive-item">${movieDB.movies.length} - ${filmInput.value}
                    <div class="delete"></div>
                </li>
            `;
            movieDB.movies.sort();

        }

        filmInput.value = '';
    });



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