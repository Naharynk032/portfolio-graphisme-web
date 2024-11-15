let lastScrollTop = 0; // Dernière position de scroll
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll vers le bas, cacher le header
        header.classList.add('hidden');
    } else {
        // Scroll vers le haut, afficher le header
        header.classList.remove('hidden');
    }

    // Mettre à jour la dernière position du scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});