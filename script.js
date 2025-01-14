const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll('.nav-item > a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

