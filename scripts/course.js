
const courses = [
    { course: "CSPC105", type: "cse", credits: 3 }, { course: "CSE111", type: "cse", credits: 2 },
    { course: "CSE210", type: "cse", credits: 2 }, { course: "WDD130", type: "wdd", credits: 2 },
    { course: "WDD131", type: "wdd", credits: 2 }, { course: "WDD231", type: "wdd", credits: 2 }
]

createCourseCards(courses);

function createCourseCards(filteredCourses) {
    document.querySelector(".container").innerHTML = "";
    filteredCourses.forEach(course => {
        let card = document.createElement("section")
        let content = document.createElement("p")

        content.textContent = course.course
        card.append(content);
        document.querySelector(".container").appendChild(card);
    })

}

const all = document.querySelector("#all");
const cse = document.querySelector("#cse");
const wdd = document.querySelector("#wdd");

all.addEventListener("click", () => {
    createCourseCards(courses)
    let sum = 0;
    cour = courses.filter(course => course.type == "cse" || course.type == "wdd");
    cour.forEach(course => {
        sum += course.credits;
        const creditsElement = document.getElementById("credits");
        creditsElement.textContent = `${sum}`;
    });
})

cse.addEventListener("click", () => {
    createCourseCards(courses.filter(course => course.type == "cse"));
    let sum = 0;
    cseCourses = courses.filter(course => course.type == "cse");
    cseCourses.forEach(course => {
        sum += course.credits;
        const creditsElement = document.getElementById("credits");
        creditsElement.textContent = `${sum}`;
    });
    
});

wdd.addEventListener("click", () => {
    createCourseCards(courses.filter(course => course.type == "wdd"));
    let sum = 0;
    wddCourses = courses.filter(course => course.type == "wdd");
    wddCourses.forEach(course => {
        sum += course.credits;
        const creditsElement = document.getElementById("credits");
        creditsElement.textContent = `${sum}`;
    });
});