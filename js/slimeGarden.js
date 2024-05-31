/* START */
/* Constanten voor buttons */
const ignis = document.querySelector("#ignis");
const plusKnop = document.querySelector("#plus");
const hintKnop = document.querySelector("#hint");
const kampvuur = document.querySelector("#kampvuur");
const boombox = document.querySelector("#muziek");
const health = document.querySelector("#health");
const javier = document.querySelector("#javier");
const hint = document.querySelector("#hint");
const wegwijzer = document.querySelector("#wegwijzer");
const wensput = document.querySelector("#wensput");
/* (bron audio: https://www.youtube.com/watch?v=eibsYJlaNsg) */
const hintAudio = new Audio("sounds/hintgeluid.mp3");

/* (bron audio: https://www.youtube.com/watch?v=i6PYS0SPwO4) */ 
const kookAudio = new Audio("sounds/kookgeluid.mp3");

/* Achtergrondmuziek (bron: https://www.youtube.com/watch?v=XJsy5jJ7Dp0) */
const muziek = new Audio("sounds/muziek.mp3");

/* (bron audio: https://www.youtube.com/watch?v=RlvRyo4ofvM) */
const voerAudio = new Audio("sounds/voergeluid.mp3");

/* (bron audio: https://www.youtube.com/watch?v=_CM45vsCmxs) */
const wensAudio = new Audio("sounds/wensgeluid.mp3");

let hintActive = false;
let hintStatus = false;
let healthActive = false;
let kookStatus = false;
let maag = Math.ceil(Math.random()* 5);
let muziekStatus = false;
let kijkStatus = false;
let wensStatus = false;

/* Array voor verschillende states (bron: If else opdracht) */
let plaatjesHP = ['HP1.png', 'HP2.png', 'HP3.png', 'HP4.png', 'HP5.png', 'HP6.png'];
let HPafbeelding = plaatjesHP[maag-1];
let voer = maag;
let vol = false;
let buffActive = false;

document.querySelector("img").src = 'img/'+HPafbeelding;

kampvuur.src = "img/Kampvuur.gif";
hint.src = "img/Hint.png";

/* HINT INTERACTIE MECHANISME (bron eigen research: https://gomakethings.com/how-to-play-a-sound-with-javascript/) */
function Tutorial(){
    hintAudio.play();
    hintActive = !hintActive;
    if(hintActive == true){
        javier.style.display = 'none';
        ignis.style.display = 'none';
        boombox.style.display = 'none';
        kampvuur.style.display = 'none';
        wegwijzer.style.display = 'none';
        wensput.style.display = 'none';
    } else {javier.style.display = 'block';
            ignis.style.display = 'block';
            boombox.style.display = 'block';
            kampvuur.style.display = 'block';
            wegwijzer.style.display = 'block';
            wensput.style.display = 'block';
    }
    if (hintStatus == true){
        hint.src = "img/Tutorial.png"
        hintStatus = false
    } else {
        hint.src = "img/Hint.png"
        hintStatus = true
    }
}

if (hintStatus == true){
    hint.src = "img/Tutorial.png"
    hintStatus = false
} else {
    hint.src = "img/Hint.png"
    hintStatus = true
}

/* SLIME INTERACTIE MECHANISME: Verbergt menu(s) achter slime (bron: Diego Ramon) */
function InteractieSlime() {
    healthActive = !healthActive;
    if(healthActive == true){
        health.style.display = 'block';
    } else {health.style.display = 'none';}
}

/* KOOK MECHANISME (bron: Lightbulb opdracht) */
function Koken(){
    if (kookStatus == true){
        kampvuur.src = "img/Kampvuur.gif"
        kookStatus = false
        javier.style.display = 'block';
        kookAudio.pause();
    } else {
        kampvuur.src = "img/Koken.gif"
        kookStatus = true
        javier.style.display = 'none';
        kookAudio.play();
        setTimeout(function(){
            buffActive = true;
        }, 1000)
    }
}

if (kookStatus == true){
    kampvuur.src = "img/Koken.gif"
    kookStatus = false
    javier.style.display = 'block';
}

/* VOEDING MECHANISME (bron: Myster number opdracht) */
function meerVoeren(){
    if (buffActive == false){
        voer = voer + 1;
    } else if (buffActive == true){
        voer = voer + 2;
    }
    ignis.src = "img/IgnisEten.gif"
    voerAudio.play();
    updateVoeding();
}

function updateVoeding(){
    if (voer == 1){
        hp.src = "img/HP1.png"
        ignis.src = "img/IgnisMoe.png"
        vol = false
    } else if (voer == 2){
        hp.src = "img/HP2.png"
    } else if (voer == 3){
        hp.src = "img/HP3.png"
    } else if (voer == 4){
        hp.src = "img/HP4.png"
    } else if (voer == 5){
        hp.src = "img/HP5.png"
    } else if (voer == 6){
        hp.src = "img/HP6.png"
        ignis.src = "img/IgnisBlij.gif"
        vol = true
    } else if (voer >= 7){
        hp.src = "img/HP6.png"
        ignis.src = "img/IgnisBlij.gif"
        vol = true
    } else if (voer >= 8){
        hp.src = "img/HP6.png"
        ignis.src = "img/IgnisBlij.gif"
        vol = true
    } if (voer >= 6){
        voer = 6;
    }
}

/* MUZIEK INTERACTIE MECHANISME */
function Muziekdraaien(){
    if (muziekStatus == true){
        boombox.src = "img/Boombox.png"
        boombox.style.display = 'block';
        muziekStatus = false
        muziek.pause();
    } else {
        boombox.src = "img/BoomboxActive.gif"
        boombox.style.display = 'block';
        muziekStatus = true
        muziek.play();
    }
}

if (muziekStatus == true){
    boombox.src = "img/Boombox.png"
    boombox.style.display = 'block';
    muziekStatus = false
}

function Kijken(){
    if (kijkStatus == true){
        wegwijzer.src = "img/Wegwijzer.png"
        kijkStatus = false
        javier.style.display = 'block';
    } else {
        wegwijzer.src = "img/Kijken.png"
        kijkStatus = true
        javier.style.display = 'none';
    }
}

if (kijkStatus == true){
    wegwijzer.src = "img/Wijzen.png"
    kijkStatus = false
    javier.style.display = 'block';
}

function Wensen(){
    if (wensStatus == true){
        wensput.src = "img/Wensput.png"
        wensStatus = false
        javier.style.display = 'block';
        wensAudio.pause();
    } else {
        wensput.src = "img/Wens.gif"
        wensStatus = true
        javier.style.display = 'none';
        wensAudio.play();
    }
}

if (wensStatus == true){
    wensput.src = "img/Wens.gif"
    wensStatus = false
    javier.style.display = 'block';
}

/* Als de slime vol zit zorgt deze functie ervoor dat hij weer honger krijgt (bron: Diego Ramon) */
setInterval(function(){if (vol == true){
    voer--;
    updateVoeding();
}}, 5000)

/* Timer voor de kookfunctie */
setInterval(function(){if (kookStatus == true){
    Koken();
    setTimeout(function(){
        buffActive = false;
    }, 10000)
}}, 8000)

/* Timer voor de interactie met de wegwijzer */
setInterval(function(){if (kijkStatus == true){
    Kijken();
}}, 2000)

/* Timer voor de interactie met de wensput */
setInterval(function(){if (wensStatus == true){
    Wensen();
}}, 2800)

/* Events voor bruikbare knoppen */
hintKnop.addEventListener('click', Tutorial)
ignis.addEventListener('click', InteractieSlime)
kampvuur.addEventListener('click', Koken)
plusKnop.addEventListener('click', meerVoeren)
boombox.addEventListener('click', Muziekdraaien)
wegwijzer.addEventListener('click', Kijken)
wensput.addEventListener('click', Wensen)