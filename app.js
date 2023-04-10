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

function displayDate() {
  console.log("*****");
  const todayDate = document.getElementById('dateToday');

  const date = new Date();

  let currentDay= String(date.getDate()).padStart(2, '0');

  let currentMonth = String(date.getMonth()+1).padStart(2,"0");

  let currentYear = date.getFullYear();

  //display the date as DD-MM-YYYY 
  let currentDate = currentMonth + '-' + currentDay + '-' + currentYear;

  todayDate.textContent = currentDate;

  const min = document.getElementById()

}