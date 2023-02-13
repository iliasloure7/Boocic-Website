const openMenu = document.querySelector('#hamburger-menu');
const closeMenu = document.querySelector('#close-menu');
const ul = document.querySelector('#nav-list');
const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;

// Smooth scroll always be on top of the section
document.documentElement.style.setProperty(
  '--scroll-padding',
  headerHeight + 'px'
);

openMenu.addEventListener('click', () => {
  ul.style.transform = 'translateX(0)';
});

closeMenu.addEventListener('click', () => {
  ul.style.transform = 'translateX(-300px)';
});
