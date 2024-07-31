try {
    const options = {
        strings: ['My name is Wiktor.', 'I am also known as spageektti.', 'I am Open Source maintainer and contributor.', 'I am a student.', 'I am a medalist of the Polish Junior Olympiad in Informatics.'
        ],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 1000,
        smartBackspace: false,
        loop: true,
        showCursor: false,
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