var twelve=document.getElementById("twelve");
var four=document.getElementById("four");
var clock=document.getElementById("clock");
// var clockv=document.getElementById("clock").value;
var thr=document.getElementById("thr");
var tmin=document.getElementById("tmin");
var tsec=document.getElementById("tsec");
var tam=document.getElementById("tam");

var tdate=document.getElementById("tdate");
var tmonth=document.getElementById("tmonth");
var tyear=document.getElementById("tyear");
var tday=document.getElementById("tday");

clock.addEventListener("change",fun2);

function fun2(){
    if(interval){
        clearInterval(interval);
    }
    var interval=setInterval(fun,1000)
}

function fun(){
    // var value1=twelve.value;
    

    // var interval=setInterval(showsec,1000)
    // function showsec(){
    var dayanddate=new Date();

    var hrs=dayanddate.getHours();
    thr.textContent=hrs;

    var mi=dayanddate.getMinutes();
    tmin.textContent=mi;

    tsec.textContent=dayanddate.getSeconds();

    tdate.textContent=dayanddate.getDate();
    var monv=dayanddate.getMonth();
    var val=["Jan","Feb","March","Apr","May","Jun","jul","Aug","Sep","Oct","Nov","Dec"]
    tmonth.textContent=val[monv];
    tyear.textContent=dayanddate.getFullYear();

    
    var dayv = dayanddate.getDay();
    var val2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    tday.textContent=val2[dayv];


    // }


   

 

    if(clock.value === "12-hr-format"){
        var hours=hrs%12;
        if(hrs>=12){
            tam.textContent= "PM";
            if(hrs>12){
                thr.textContent=hours;
            }
            else if(hrs===12){

                thr.textContent=12;
            }
            
        }
        else{
            tam.textContent= "AM";
            if(hrs===0){
                thr.textContent=0;
            }
            else{
                thr.textContent=hrs;
            }
           
        }    
    }

    else if (clock.value === "24-hr-format") {

            tam.textContent=""; 
    }
}




