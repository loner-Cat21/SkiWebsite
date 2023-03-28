 
 //Global Variables
 const btnTrails = document.getElementById('TrailGet').addEventListener('click', EventHandlerTrails);

 const btnMount = document.getElementById('MountRe').addEventListener('click', EventHandlerMount);


 const El_Price=document.getElementById("Price");
 let BasePrice =0;

function EventHandlerTrails(){
    document.getElementById("Price").textContent=40;
};
function EventHandlerMount(){
    TrailsCalculations()
};


function TrailsCalculations(){
    BasePrice="hello";
    document.getElementById("Price").textContent=50;
}
let details = document.getElementById("Details");
details.textContent="44"+BasePrice;

