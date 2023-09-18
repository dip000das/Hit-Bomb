function makeBubble(){


var clutter="";
for(var i=1;i<=102;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;

}
makeBubble();




var timer=60;
function runTimer(){
    var interval=setInterval(function(){
         if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
         }
         else{
         
            clearInterval(interval);
            document.querySelector("#pbtm").innerHTML="<h1>GAME OVER</h1>";
         }

    },1000);
}
runTimer();


var rn;
function getNewHit(){
    rn=Math.floor(Math.random()*10);
   document.querySelector("#hitno").textContent=rn;
}
getNewHit();

var score=0;
function increaseScore(){
  score+=10;
  document.querySelector("#scorepoint").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dip){
var clickedNo=Number(dip.target.textContent);
if(rn===clickedNo){
    increaseScore();
    makeBubble();
    getNewHit();
}
});