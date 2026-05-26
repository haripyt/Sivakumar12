function toggleMenu() {
    var menu = document.querySelector('.navbar ul');
    menu.classList.toggle('active');
}
// Add event listener for scrolling to toggle sticky navbar
window.onscroll = function() {
    toggleStickyNavbar()
};

var navbar = document.querySelector('.navbar');
var body = document.body;
var sticky = navbar.offsetTop;

function toggleStickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('fixed-nav');
        body.classList.add('fixed-nav-padding');
    } else {
        navbar.classList.remove('fixed-nav');
        body.classList.remove('fixed-nav-padding');
    }
}