let lastScrollTop = 0;

window.onscroll = function() {
    scrollFunction(); 
    scrollFunction2();
};

function scrollFunction() {
    const header = document.getElementById("header");
    if (!header) return; // Exit if header doesn't exist on this page
    
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (currentScroll > lastScrollTop && currentScroll > 5) {
        // Scrolling DOWN - make header bigger
        header.classList.add("scrolled");
    } else if (currentScroll < lastScrollTop) {
        // Scrolling UP - make header smaller
        header.classList.remove("scrolled");
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

function scrollFunction2() {
    const header2 = document.getElementById("header2");
    if (!header2) return; // Exit if header2 doesn't exist on this page
    
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (currentScroll > lastScrollTop && currentScroll > 5) {
        // Scrolling DOWN - make header bigger
        header2.classList.add("scrolled");
    } else if (currentScroll < lastScrollTop) {
        // Scrolling UP - make header smaller
        header2.classList.remove("scrolled");
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}
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
});
const params = new URLSearchParams(window.location.search);
const position = params.get('position');

const applyBtn = document.getElementById('applyBtn');
if (applyBtn) {
  applyBtn.href = position
    ? `ApplyHere.html?position=${encodeURIComponent(position)}`
    : 'ApplyHere.html';
}

const dropdown = document.getElementById('position');
if (dropdown && position) {
  dropdown.value = position;
}