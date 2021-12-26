const date = new Date();


const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"

];

document.querySelector(".date h1").innerHTML=months[date.getMonth()];

document.querySelector(".date p").innerHTML=date.toDateString();

let days = "";

for(let i = 1; i <= 31; i++){
    days+= `<div>${i}</div>`; 
    monthDays.innerHTML = days;
} 