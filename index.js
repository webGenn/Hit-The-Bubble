// ----------------------------Game Sound--------------------------------

var audioplay = document.getElementById("audioplay");
var audio1 = new Audio("Game Start Tone.mp3");

audioplay.addEventListener("click",function(){
     if(audioplay.classList.contains("fa-volume-xmark")){
         audioplay.classList.remove("fa-volume-xmark");
         audioplay.classList.add("fa-volume-high");
         audio1.play();
     }
     else{
        audio1.pause();
        audioplay.classList.remove("fa-volume-high");
        audioplay.classList.add("fa-volume-xmark");
     }
})

// ----------------------------------Game Logic----------------------------------

var score = 0;
var RandowNumberGen = Math.floor(Math.random()*25);

function makeBubble(){
    var bubbleCreate = "";
    var page = document.querySelector(".mid_main_page");
    for(var i=0; i<=200; i++){
    var Numgen = Math.floor(Math.random()*25);
    bubbleCreate += `<div class="bubble">${Numgen}</div>`;
}
    page.innerHTML = bubbleCreate;
}

function randomHit(){
    var hitbox = document.getElementById("Hit");
        RandowNumberGen = Math.floor(Math.random()*25);
        hitbox.innerHTML = RandowNumberGen;
}

function runTime(){
    let timer = 240;
    var timerbox = document.getElementById("Time");
    const RunningTime = setInterval(function(){
        if(timer > 0){
            timer--;
            timerbox.textContent = timer;
        }
        else{
            clearInterval(RunningTime);
            document.querySelector(".mid_main_page").innerHTML = `<h1 id="Gamerover">Game Over`;
            document.getElementById("Hit").innerHTML = 0;
        }
    },1000)
}

function IncreaseScore(){
    var scorebox = document.getElementById("Score");
    score += 10;
    scorebox.textContent = score;
}

document.querySelector(".mid_main_page").addEventListener("click",function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === RandowNumberGen){
        IncreaseScore();
        randomHit();
        makeBubble();
    }
})


makeBubble();
randomHit();
runTime();
