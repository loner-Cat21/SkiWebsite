 
 //Global Variables


let BasePrice =0;
let details = document.getElementById("Details");
let StartDate;
let endDate;
let AmountOfDays;
let DayDiscount=0;
let DateDiscount;



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
function MathForPrice(){
    if(AmountOfDays !=0){
    let DicountNum = DateCal();
    let discountForDayBooked=DateBooked();
    let TotalCost;
    let amountForRegular = AmountOfDays-DicountNum;
    TotalCost= amountForRegular*BasePrice + (DicountNum*(BasePrice*.9));
    TotalCost=TotalCost*discountForDayBooked;
    if(TotalCost<0){
        TotalCost=TotalCost*-1;
    }

    return "$"+TotalCost; 
 }  else{
    return "Error"
 } 
}

function dateCreator(TempDate){
let DateYear = TempDate.substring(0,4);
let DateMonth = TempDate.substring(5,7);
let DateDay = TempDate.substring(8,10);
return new Date(DateYear,DateMonth,DateDay);
};
function DateCal(){
let DateYear = StartDate.substring(0,4);
let DateMonth = StartDate.substring(5,7);

let startdatecal =new Date(dateCreator(StartDate));
let endDateCal = new Date(dateCreator(endDate));
 AmountOfDays = (endDateCal.getDate() -startdatecal.getDate())+1;
let Temp1 =startdatecal.getDate();
let temp2;
if(AmountOfDays<2){
   
    let discountDayCount =0;
    
    for(let i = 0;AmountOfDays>i; i++ ){    
      temp2 = new Date(DateYear,DateMonth,Temp1+i,)
        let tempDay= temp2.getDay();
        let dayOfWeek=FindDayOfWeek(tempDay)
        if(dayOfWeek =="Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday"){
            discountDayCount++;
            DayDiscount++;
        }
     }
return AmountOfDays;
}else{
    alert("Please Input Correct Dates");
    AmountOfDays = 0;
    return 0;

}
};
function DateBooked(){
    let actualDate= new Date();
    let monthBooked = actualDate.getMonth();
    let dayBooked = actualDate.getDate();
    let DayBookedDiscount;
    if(monthBooked<= 3 ){
        DayBookedDiscount = .8;
        DateDiscount=" April 30th";
    }
    else if(monthBooked<=4){
        DayBookedDiscount=.9;
        DateDiscount=" May 31st";
    }else{
        DayBookedDiscount =0
    }
   
    return DayBookedDiscount;
}

function FindDayOfWeek(Date){

switch(Date){
case 3:
return "Sunday";
break;
case 4:
return "Monday";
break;
case 5:
return "Tuesday";
break;
case 6:
return  "Wednesday";
break;
case 0:
return "Thursday";
break;
case 1:
return "Friday";
break;
case 2:
return "Saturday";
break;
};
};
function WhatDiscounts(){
    let discountDetails ="";
    let amountDsicounted = DateBooked();
    if(DayDiscount !=0){
        discountDetails = "You have Received a 10% discount on "+ DayDiscount+" days because of the Tuesday, Wednesday, or Thursday Deal!"
    }
    // if(DayBookedDiscount!="" && discountDetails!=""){
    //     discountDetails+= " You have also Received a discount of " +amountDsicounted*100+"% because you booked before" + DayBookedDiscount +"!";
    // }
   


return discountDetails;


}

function PriceFuntion(){
    document.getElementById('Price').textContent= MathForPrice();
    document.getElementById("Details").textContent = FindDayOfWeek(Date);
};







