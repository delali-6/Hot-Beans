// JavaScript for the Hot Beans website
// This script handles the navigation bar active state and the Apply Now button links
document.addEventListener('DOMContentLoaded', function() {
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
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


// Dropdown menu functionality
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
