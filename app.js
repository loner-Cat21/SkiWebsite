// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar_menu');
// const navLogo = document.querySelector('#navbar__logo');

// // Display Mobile Menu
// const mobileMenu = () => {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// };

// menu.addEventListener('click', mobileMenu);

// // Show active menu when scrolling
// const highlightMenu = () => {
//   const elem = document.querySelector('.highlight');
//   const employment = document.querySelector('#Employment');
//   const events = document.querySelector('#Events');
//   const lessons = document.querySelector('#Lessons');
//   const SnowReportings = document.querySelector('#SnowReports');
//   let scrollPos = window.scrollY;
//   // console.log(scrollPos);

//   // adds 'highlight' class to my menu items
//   if (window.innerWidth > 960 && scrollPos < 600) {
//     homeMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPos < 1400) {
//     aboutMenu.classList.add('highlight');
//     homeMenu.classList.remove('highlight');
//     servicesMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPos < 2345) {
//     servicesMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     return;
//   }

//   if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
//     elem.classList.remove('highlight'); 
//   }
// };

// window.addEventListener('scroll', highlightMenu);
// window.addEventListener('click', highlightMenu);

// //  Close mobile Menu when clicking on a menu item
// const hideMobileMenu = () => {
//   const menuBars = document.querySelector('.is-active');
//   if (window.innerWidth <= 768 && menuBars) {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.remove('active');
//   }
// };

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};
//getting element from the hTML Document and trying to manipulate it
const AverageTempToday = document.getElementById("tempAverage");
let TempAvgToday = (10).toString();
AverageTempToday.textContent = "today's Average Temp is: " + TempAvgToday;

// fetch( "https://api.openweathermap.org/data/2.5/weather?q=colorado&appid=c8b260397fd294145748ea4206128b3f", {
//   "method": "GET",
//   "headers": {
//   }
//   })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.error(err);
// });
