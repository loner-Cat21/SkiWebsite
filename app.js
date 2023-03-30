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
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//getting element from the hTML Document and trying to manipulate it
const AverageTempToday = document.getElementById("tempAverage");
AverageTempToday.innerHTML = "today's Average Temp is: ";

fetch( "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Colorado?unitGroup=us&key=GCXRTVTJ8DZ48XCLEYHDEPRTR&contentType=json",{
    method: 'GET', 
    headers: {
  
    },
            
  }).then(response => {
    if (!response.ok) {
      throw response; //check the http response code and if isn't ok then throw the response as an error
    }
              
    return response.json(); //parse the result as JSON

  }).then(response => {
    //response now contains parsed JSON ready for use
    processWeatherData(response);

  }).catch((errorResponse) => {
    if (errorResponse.text) { //additional error information
      errorResponse.text().then( errorMessage => {
        //errorMessage now returns the response body which includes the full error message
      })
    } else {
      //no additional error information 
    } 
});
const el_MinDay1 = document.getElementById("Day1Min");
el_MinDay1 = day.tempMax;

const el_Weather3 = document.getElementById("weatherContainer");

function myFunction(){
  el_Weather3.style.visibility = "visible";
}
