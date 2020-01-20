// DOM header list items
const about = document.querySelector('.about');
const hiddenAbout = document.querySelector('.hidden-about');
const contact = document.querySelector('.contact');
const hiddenContact = document.querySelector('.hidden-contact');
const button = document.querySelector('.hamburger-btn');
const hiddenNav = document.querySelector('.hidden-nav');

// About, Contact, and My Work sections
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contact');
  // Arrow spans
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
const myWorkSection = document.querySelector('#my-work');

// Add event listeners
about.addEventListener('click', () => {
  aboutSection.classList.toggle('about-slide-in');
  contactSection.classList.remove('contact-slide-in');
  console.log('Hello')
});
hiddenAbout.addEventListener('click', () => {
  aboutSection.classList.toggle('about-slide-in');
  contactSection.classList.remove('contact-slide-in');
  console.log('Hello')
});
contact.addEventListener('click', () => {
  contactSection.classList.toggle('contact-slide-in');
  aboutSection.classList.remove('about-slide-in');
});
hiddenContact.addEventListener('click', () => {
  contactSection.classList.toggle('contact-slide-in');
  aboutSection.classList.remove('about-slide-in');
});
button.addEventListener('click', () => {
  button.classList.toggle('btn-x');
  hiddenNav.classList.toggle('slide-down');
  if(hiddenNav.className != 'slide-down') {
    hiddenNav.style.transition = 'all 400ms';
  }
});

leftArrow.addEventListener('click', () => {
  aboutSection.classList.remove('about-slide-in');
  contactSection.classList.remove('contact-slide-in');
});

rightArrow.addEventListener('click', () => {
  aboutSection.classList.remove('about-slide-in');
  contactSection.classList.remove('contact-slide-in');
});


// Footer area
const credit = document.querySelector('.credit span')

let year = new Date();

credit.textContent = year.getFullYear();
