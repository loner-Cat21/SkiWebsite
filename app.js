function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function getInfo() {
  fetch( "https://api.openweathermap.org/data/2.5/forecast?q=colorado&appid=c8b260397fd294145748ea4206128b3f")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => alert("something went wrong: Please check your internet connection"))

}