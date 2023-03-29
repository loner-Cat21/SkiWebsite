 
 //Global Variables


let BasePrice =0;
let details = document.getElementById("Details");
let StartDate;
let endDate

// Event functions
function RadioClicked(BP){
   BasePrice = BP;
}
function startDateEvent(){
    StartDate = document.getElementById("startDate").value;
}
function endDateEvent(){
    endDate = document.getElementById("endDate").value;
}
// function MathForPrice(){

// }
// function valadation(){

// }
function dateCreator(TempDate){
let DateYear = TempDate.substring(0,4);
let DateMonth = TempDate.substring(5,7);
let DateDay = TempDate.substring(8,10);
return new Date(DateYear,DateMonth,DateDay);
};
function DateCal(){
let startdatecal =new Date(dateCreator(StartDate));
let endDateCal = new Date(dateCreator(endDate));
let AmountOfDays = (endDateCal -startdatecal)/(24*60*60*1000) ;
let discountDayCount = 0;
    let tempDate=Date.endDateCal();
    let TempWeekDay=FindDayOfWeek(tempDate);
    if(TempWeekDay=="Thursday" ||TempWeekDay =="Tuesday" ||TempWeekDay=="Wednesday" ){
        discountDayCount++;
    }
return discountDayCount;
};


function FindDayOfWeek(Date){
let ListOfDayNames =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
return ListOfDayNames[Date];

};
function PriceFuntion(){
    document.getElementById('Price').textContent= BasePrice;
    document.getElementById("Details").textContent = DateCal();
};







