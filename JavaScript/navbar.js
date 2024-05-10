window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var navLinks = document.querySelectorAll('.nav__links a');
    
    if (window.scrollY > 600) {
        logo.style.color = '#0a0a0a'; // Zmiana koloru tekstu klasy .logo na czarny
        navLinks.forEach(function(link) {
            link.style.color = '#0a0a0a'; // Zmiana koloru tekstu nawigacji na czarny
        });
    } else {
        logo.style.color = '#fff'; // Powrót do pierwotnego koloru tekstu klasy .logo
        navLinks.forEach(function(link) {
            link.style.color = '#fff'; // Powrót do pierwotnego koloru tekstu nawigacji
        });
    }
});
