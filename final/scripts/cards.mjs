import { movies } from './movies.mjs';

console.log(movies);

const cards = document.querySelector('#cards');

function createMovieCard(movies) {
    document.querySelector("#cards").innerHTML = "";
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        card.innerHTML = `
        <img src="${movie.image}" alt="${movie.name}">
        <h3>${movie.name}</h3>
        <button> about </button>
        `;

        cards.appendChild(card);

        card.addEventListener('click', () => {
            displayMoviesDetails(movie);
        });
    })
}

const link = document.querySelector('#menu');
const link2 = document.querySelector('#menu2');
const genres = document.querySelector('.genres');
const where = document.querySelector('.where');


link.addEventListener('click', () => {
    genres.classList.toggle('open');
    link.classList.toggle('open');
});

link2.addEventListener('click', () => {
    where.classList.toggle('open');
    link2.classList.toggle('open');
});


const allmovies = document.querySelector("#all");
const sciFi = document.querySelector("#sci-fi");
const adventure = document.querySelector("#adventure");
const animation = document.querySelector("#animation");
const family = document.querySelector("#family");
const comedy = document.querySelector("#comedy");
const fantasy = document.querySelector("#fantasy");
const action = document.querySelector("#action");
const crime = document.querySelector("#crime");
const drama = document.querySelector("#drama");
const musical = document.querySelector("#musical");
const history = document.querySelector("#history");
const romance = document.querySelector("#romance");

const max = document.querySelector("#max");
const disney = document.querySelector("#disney");
const netflix = document.querySelector("#netflix");
const paramount = document.querySelector("#paramount");
const amazonPrimeVideo = document.querySelector("#amazon-prime-video");
const appleTv = document.querySelector("#apple-tv");
const peacock = document.querySelector("#peacock");
const allMovies2 = document.querySelector("#all-movies");


allmovies.addEventListener("click", () => {
    createMovieCard(movies)
});

sciFi.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Sci-Fi")));
});

adventure.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Adventure")));
});

animation.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Animation")));
});

family.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Family")));
});

comedy.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Comedy")));
});

fantasy.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Fantasy")));
});

action.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Action")));
});

crime.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Crime")));
});

drama.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Drama")));
});

musical.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Musical")));
});

history.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("History")));
});

romance.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.genre.includes("Romance")));
});

// Max
max.addEventListener("click", () => {
    createMovieCard(movies.filter(movie => movie.where.includes("Max")));
});



// dialog

const movieDetails = document.getElementById('movies-details');

function displayMoviesDetails(movies) {
    movieDetails.innerHTML = '';
    movieDetails.innerHTML =
    `<button id="closeModal">❌</button>

    <h3>${movies.name}</h3>
    <h4>${movies.description}</h4>
    <h5>${movies.release_date}</h5>
    <p><strong>PG</strong> ${movies.age_rating}</p>
    <p>watch on: ${movies.where_to_watch}`;
    movieDetails.showModal();

    closeModal.addEventListener("click", () => {
        movieDetails.close();
    });
}