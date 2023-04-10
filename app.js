function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function getInfo() {
  fetch( "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Colorado?unitGroup=us&key=GCXRTVTJ8DZ48XCLEYHDEPRTR&contentType=json")

}