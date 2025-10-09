
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2ViMWY0NDRjMzg2OTUxNjQ3MjMzODlmNDNjMjU3MCIsIm5iZiI6MTc1OTk2NDMxNC4xNzQsInN1YiI6IjY4ZTZlYzlhOGI1MWU3NmZiMmFhMTJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KWGVtJMfgZg_S9hPgZzLYLmaeWMK4nqFnja-cCn_8fc'
    }
};
const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

async function apiFetch() {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
             console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const container = document.querySelector('#trending');
    container.innerHTML = ''; // clear existing movies

    data.results.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.original_title} loading="lazy" height="250" width="200">
      <h3>${movie.original_title}</h3>
      <p> ${movie.release_date}</p>
    `;

        container.appendChild(card);
    });
}
