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

// Here is an example of how you can use JavaScript to display a popup with yourteam member's information when a user clicks on their name:

const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
  member.addEventListener('click', () => {
    const popup = document.querySelector(`.team-member-popup[data-member="${member.dataset.member}"]`);
    popup.style.display = 'block';
  });
});

const closeButtons = document.querySelectorAll('.close-button');

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.parentElement.parentElement;
    popup.style.display = 'none';
  });
});

// Here is an example of how you can use JavaScript to handle the opinion form submission:

const opinionForm = document.querySelector('.opinion-form');
const opinionsContainer = document.querySelector('.opinions-container');

opinionForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = opinionForm.elements['name'].value;
  const opinion = opinionForm.elements['opinion'].value;
  const opinionCard = document.createElement('div');
  opinionCard.classList.add('opinion-card');
  opinionCard.innerHTML = `
    <h4>${name}</h4>
    <p>${opinion}</p>
  `;
  opinionsContainer.appendChild(opinionCard);
  opinionForm.reset();
});