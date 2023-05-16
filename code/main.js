let tl = gsap.timeline();
tl.from('.art', { x: -10, opacity: 0, duration: 1 });
tl.from('.poz-title h1', { y: 10, opacity: 0, duration: 0.5, delay: '-.5' });
tl.from('.poz-title h3', { x: 10, opacity: 0, duration: 0.5 });
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav .sections-links a');
const toTopButton = document.querySelector('.to-top-button');
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('nav');
const mobileNavBar = document.querySelector('.mobile-navbar');
const homeSection = document.querySelector('.home');
const logo = document.querySelector('.logo');
links.forEach((link) => {
  link.addEventListener('click', navActive);
  console.log('working');
});
menuBtn.addEventListener('click', navActive);
function navActive() {
  if (window.innerWidth >= 750) return;
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  logo.classList.toggle('active');

  if (mobileNavBar.classList.contains('its-down')) {
    mobileNavBar.classList.remove('its-down');
  } else if (!mobileNavBar.classList.contains('its-down') && scrollY >= 50) {
    mobileNavBar.classList.add('its-down');
  }
}

//on scroll animations elements start
const descBox = document.querySelector('.description-box'),
  skills = document.querySelectorAll('.skill'),
  works = document.querySelectorAll('.work');
//on scroll animations elements end

window.addEventListener('scroll', (e) => {
  if (scrollY >= 50 && !nav.classList.contains('active')) {
    nav.classList.add('its-down');
    toTopButton.classList.add('its-down');
    mobileNavBar.classList.add('its-down');
  } else if (nav.classList.contains('its-down')) {
    toTopButton.classList.remove('its-down');
    nav.classList.remove('its-down');
    mobileNavBar.classList.remove('its-down');
  }
  let bottom = scrollY + window.innerHeight;
  let elMid =
    descBox.clientHeight / 2 + (descBox.getBoundingClientRect().top + scrollY);
  skills.forEach((skill) => {
    let skillElMid =
      skill.clientHeight / 2 + (skill.getBoundingClientRect().top + scrollY);
    if (bottom >= skillElMid) {
      skill.classList.add('arived');
    }
    
  });

  works.forEach(work => {
    let workElMid =
      work.clientHeight / 2 + (work.getBoundingClientRect().top + scrollY);
    if (bottom >= workElMid) {
      work.classList.add('arived');
    }
  })
  console.log(elMid);
  if (bottom >= elMid) {
    descBox.classList.add('arived');
  }
});
