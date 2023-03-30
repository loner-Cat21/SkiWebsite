 
 //Global Variables


let BasePrice =0;
let details = document.getElementById("Details");
let StartDate;
let endDate;
let AmountOfDays;

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
let DicountNum = DateCal();
let TotalCost;
let amountForRegular = AmountOfDays-DicountNum;
TotalCost= amountForRegular*BasePrice + (DicountNum*(BasePrice*.8));
return TotalCost;
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
if(AmountOfDays=>0){
    let discountDayCount = 0;
   
    
    for(let i = 0;AmountOfDays>i; i++ ){
        
      temp2 = new Date(DateYear,DateMonth,Temp1+i,)
        let tempDay= temp2.getDay();
        let dayOfWeek=FindDayOfWeek(tempDay)
        if(dayOfWeek =="Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday"){
            discountDayCount++;
        }
     }
    //  if(startdatecal.getDay() == endDateCal.getDay()){
    //     discountDayCount=discountDayCount+(discountDayCount/2)
    //}
return discountDayCount;
}else{
    alert("Please Input Correct Dates");
}
};
function DateBooked(){
    let actualDate= new Date();
    
    // if(actualDate.getMonth = "May")
    return actualDate;
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

function PriceFuntion(){
    document.getElementById('Price').textContent= MathForPrice();
    document.getElementById("Details").textContent = DateBooked();
};







