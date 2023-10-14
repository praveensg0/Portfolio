/* 
    This website is open source and available under the MIT License.
    
    MIT License:
    - Copyright © Praveen S G
    - Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
    - For more details, please refer to the LICENSE file.
*/

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
emailjs.init('_BxbvMjKhaKD9MGtD');
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a parameter object from form data
    var tempParams = {
        from_name: document.getElementById("name").value,
        email_sender: document.getElementById("email").value,
        message_sender: document.getElementById("message").value,
        subject_sender: "Contact Form Submission", // You can set a default subject
    };

    // Send the email using emailjs
    // Get the service id and template id from here https://dashboard.emailjs.com/admin
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', tempParams)
        .then(function (res) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Mail Sent Successfully!',
                showConfirmButton: false,
                timer: 1500,
            });

            // Hide the form after successful submission
            const form = document.getElementById('contact-form');
            form.style.display = 'none';
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'block';
        });
}

// Add an event listener to the form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleFormSubmission);

sr.reveal('.work__text, .work__text2, .home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon, work__text2', { interval: 200 });
sr.reveal('.skills__data, .skills__data-wide, .work__img, #contact', { interval: 200 });


// Make sure to replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with the actual Service ID and Template ID provided by EmailJS. This updated section provides clear instructions on how to configure the EmailJS integration for your contact form.
