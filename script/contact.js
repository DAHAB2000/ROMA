const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
  navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});


// Optional: add a "responsive" class to the navbar when the user resizes the screen
window.addEventListener('resize', () => {
  const navbar = document.querySelector('.navbar');
  if (window.innerWidth <= 768) {
    navbar.classList.add('responsive');
  } else {
    navbar.classList.remove('responsive');
  }
});

// Optional: add a "responsive" class to the navbar when the page loads on a small screen
if (window.innerWidth <= 768) {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('responsive');
}


const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Do some validation on the inputs here
  // ...

  // If the inputs are valid, show a success message
  const successMessage = document.createElement('div');
  successMessage.textContent = 'Message sent successfully!';
  successMessage.style.color = 'green';
  successMessage.style.marginTop = '1rem';
  form.appendChild(successMessage);

  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});






window.addEventListener("load", function() {
    var footer = document.querySelector("footer");
    var body = document.querySelector("body");
    var bodyHeight = body.offsetHeight;
    var viewportHeight = window.innerHeight;
    if (bodyHeight < viewportHeight) {
      footer.style.position = "fixed";
      footer.style.bottom = "0";
      footer.style.width = "100%";
    }
  });






