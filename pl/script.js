try {
    const options = {
        strings: ['Mam na imię Wiktor.', 'Jestem także znany jako spageektti.', 'Jestem opiekunem i kontrybutorem open source.', 'Jestem studentem.', 'Jestem medalistą Olimpiady Informatycznej Juniorów.'
        ],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 1000,
        smartBackspace: false,
        loop: true,
        showCursor: true,
    };

    const typed = new Typed("#animated-heading", options);
} catch {
    console.log("Typed tried to show the animated heading on page that is not the home page.");
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('showing');
    });
});