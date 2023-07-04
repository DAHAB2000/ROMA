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








const shippingCard = document.querySelector('.shipping-card');
const shippingCardHeader = document.querySelector('.shipping-card-header');

shippingCardHeader.addEventListener('click', () => {
  shippingCard.classList.toggle('active');
});


const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('.price').textContent;
    addToCart(productName, productPrice);
  });
});

function addToCart(name, price) {
  // Add the product to the basket
  console.log(`Added ${name} to the cart for ${price}`);
}