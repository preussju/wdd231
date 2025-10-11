async function loadReview() {
    const response = await fetch('./data/reviews.json');
    const data = await response.json();
    displayRandom(data.reviews);
}

loadReview();

//get random review for home page

const ran = document.querySelector("#random");

const displayRandom = (reviews) => {

    const random = reviews.sort(() => 0.5 - Math.random());
    const selected = random.slice(0, 2);

    selected.forEach((revi) => {

        let card = document.createElement("section");
        let title = document.createElement("h3");
        let nick = document.createElement("h4");
        let year = document.createElement("p");
        let rating = document.createElement("p");

        nick.textContent = `${revi.nickname} : ${revi.review} `;
        title.textContent = `${revi.movie_title} - ${revi.year} `
        rating.textContent = revi.rating;

        card.appendChild(rating);
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(nick);

        ran.appendChild(card); //"ran" is the id in the html

    });

}