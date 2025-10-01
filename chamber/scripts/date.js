document.addEventListener('DOMContentLoaded', function () {
    /* footer script */
    const Year = new Date().getFullYear();
    const YearSpan = document.getElementById('currentyear');

    const lastModifiedDate = document.lastModified;
    const lastModifiedParagraph = document.getElementById('lastModified');

    if (YearSpan) {
        YearSpan.textContent = Year;
    }

    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
    }

});

const timestamp = document.getElementById('formTimestamp')
timestamp.value = document.lastModified;


window.onload = () => {
    const lastVisitDisplay = document.getElementById('lastVisitDisplay');

    // Get the previous visit from localStorage
    const lastVisit = localStorage.getItem('lastVisitDate');

    if (lastVisit) {
        // If there's a saved date, show it
        lastVisitDisplay.textContent = `Your last visit was on: ${lastVisit}`;
    } else {
        // If this is the first visit
        lastVisitDisplay.textContent = `Welcome! This is your first visit.`;
    }

    // Save the current date as the new "last visit"
    const now = new Date().toLocaleString(); // You can customize the format
    localStorage.setItem('lastVisitDate', now);

    console.log('Previous visit:', lastVisit);
    console.log('Current date:', now);
};

console.log('Previous visit:', lastVisit);
console.log('Current date:', now);