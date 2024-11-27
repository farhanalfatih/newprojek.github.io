const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// faq 
document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');

        const panel = accordion.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const ppdbLink = document.querySelector('.ppdb-link');
    const ppdbPanel = document.querySelector('.ppdb-panel');
    const navItem = document.querySelector('.nav-item');

    ppdbLink.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah navigasi default
        navItem.classList.toggle('active'); // Toggle class active untuk menampilkan/menyembunyikan panel
    });
});