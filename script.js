// JavaScript for the Hot Beans website
// This script handles the navigation bar active state and the Apply Now button links
document.addEventListener('DOMContentLoaded', function() {
const navLinks = document.querySelectorAll('.nav-links');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

const params = new URLSearchParams(window.location.search);
const position = params.get('position');

if (position) {
        const select = document.getElementById("position");
        select.value = position;
}
});

