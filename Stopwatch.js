const count=document.querySelector("#count");
const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
const reset=document.getElementById("reset");
let time=0;
let enlapsedtime=0;
let current=0;
let hours=0;
let minutes=0;
let paused=true;
let seconds=0;
let interval;
start.addEventListener("click",()=>{
    if(paused){
        paused=false; 
        time=Date.now()-enlapsedtime;
        interval=setInterval(update,75);
    }
});
stop.addEventListener("click",()=>{
    clearInterval(interval);
    enlapsedtime=Date.now()-time;
});
reset.addEventListener("click",()=>{
    paused=true;
    clearInterval(interval);
    time=0;
    enlapsedtime=0;
    hours=0;
    minutes=0;
    seconds=0;
    count.textContent="00:00:00";
});
function update(){
    enlapsedtime=Date.now()-time;
    seconds=Math.floor((enlapsedtime/1000) % 60);
    minutes=Math.floor((enlapsedtime/(1000*60))%60);
    hours=Math.floor((enlapsedtime/(1000*60*60))%60);
    seconds=b(seconds);
    minutes=b(minutes);
    hours=b(hours);
    function b( a ){
        if((("0")+a).length>2){
            return a;
        }
        else{
            return "0"+a;
        }
    }

    count.textContent=`${hours}:${minutes}:${seconds}`;
    
}

