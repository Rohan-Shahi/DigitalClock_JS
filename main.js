

function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let rec = "AM";

    if(hour > 12){
        rec = "PM";
        hour = hour-12;
    }
    if(hour == 0){
        hour = 12;
        rec = "AM";
    }

    hour = hour<10? "0"+hour : hour;
    min = min < 10? "0"+min : min;
    sec = sec < 10? "0" + sec : sec;

    let currentTime = `${hour} : ${min} : ${sec} ${rec}` ;
    document.getElementById("clock").innerHTML = currentTime;


    
}

setInterval(showTime,1000);

showTime();

const odd_even = function (){
    let sec = new Date().getSeconds();
    let msg = " ";
    if(sec % 2 == 0){
        msg = "Even";
     
    }else{
        msg = "Odd";
    }

    document.getElementById("displayer").innerHTML = msg;
}

