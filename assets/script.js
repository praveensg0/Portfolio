/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});
// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    // Simulate sending data to a server (you can replace this with an actual API request)
    // In this example, we're just logging the form data to the console
    for (const [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }

    // Display a success message and hide the form
    form.style.display = 'none';
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
}

// Add an event listener to the form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleFormSubmission);

sr.reveal('.work__text, .work__text2, .home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon, work__text2', { interval: 200 });
sr.reveal('.skills__data, .skills__data-wide, .work__img, #contact', { interval: 200 });
