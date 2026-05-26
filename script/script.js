function showContent(section) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Show the selected section
    document.getElementById(section).classList.add('active');
}

// Show the History section by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showContent('history');
});
let slideIndex = 0;
showSlides();

// Function to show slides
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Function to navigate slides
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
// Function to format numbers with or without a plus sign
function formatNumber(elementId, value) {
    // Apply + only to specific elements
    const isPlusNeeded = elementId === 'companiesVisited' ||
        elementId === 'studentsPlaced' ||
        elementId === 'studentsWithOffers';

    if (value >= 100000) {
        return (value / 100000).toFixed(2) + ' Lakh CTC' + (isPlusNeeded ? '+' : '');
    } else {
        return value + (isPlusNeeded ? '+' : '');
    }
}

// Function to animate the counter
function countUp(elementId, targetValue, duration) {
    const element = document.getElementById(elementId);
    const startTime = Date.now();
    const endTime = startTime + duration;

    function updateCounter() {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * targetValue);
        element.textContent = formatNumber(elementId, currentValue);

        if (now < endTime) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = formatNumber(elementId, targetValue); // Ensure it ends exactly at target
        }
    }

    requestAnimationFrame(updateCounter);
}

// Duration for all counters
const animationDuration = 2000; // 2 seconds

// Call the function for each counter with target values and the same duration
countUp('companiesVisited', 35, animationDuration);
countUp('studentsPlaced', 435, animationDuration);
countUp('studentsWithOffers', 1109, animationDuration);
countUp('highestPackage', 619000, animationDuration); // Example for large numbers

window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var logoSection = document.querySelector('.logo-section');
    var stickyPoint = logoSection.offsetHeight; // Get height of the logo section

    if (window.pageYOffset >= stickyPoint) {
        navbar.classList.add('fixed-nav'); // Add fixed class to navbar
        document.body.classList.add('fixed-nav-padding'); // Add padding to body
    } else {
        navbar.classList.remove('fixed-nav'); // Remove fixed class when not scrolled
        document.body.classList.remove('fixed-nav-padding'); // Remove extra padding
    }
};