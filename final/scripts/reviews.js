async function loadReview() {
    const response = await fetch('./data/reviews.json');
    const data = await response.json();
    displayReview(data.reviews);
}

const review = document.querySelector("#reviews");

loadReview();

const displayReview = (reviews) => {

    reviews.forEach((revi) => {

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

        review.appendChild(card); //"review" is the id in the html

    });

}

function setEmail() {
    const emailInput = document.getElementById("email").value;
    localStorage.setItem("userEmail", JSON.stringify(emailInput));
}

function getEmail() {
    return JSON.parse(localStorage.getItem("userEmail"));
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    setEmail();
    alert("Email saved!");
});