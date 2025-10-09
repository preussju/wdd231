async function loadNextMovies() {
    const response = await fetch('./data/next-movies.json');
    const data = await response.json();
    displayNextMovies(data.next);
}

const release = document.querySelector("#release");

loadNextMovies();

const displayNextMovies = (movies) => {
    movies.forEach((movie) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let date = document.createElement("p");
        let imageurl = document.createElement("img");

        name.textContent = movie.name;
        date.textContent = movie.release_date_us;

        imageurl.setAttribute("src", movie.image);
        imageurl.setAttribute("alt", `image of ${movie.name} `);
        imageurl.setAttribute("loading", "lazy");
        imageurl.setAttribute("height", 250)
        imageurl.setAttribute("width", 200)

        card.appendChild(imageurl);
        card.appendChild(name);
        card.appendChild(date);

        release.appendChild(card); //"cards" is the id in the html

    });

}
