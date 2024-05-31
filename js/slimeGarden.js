/* START */

let hintactive = false;
let hint = document.querySelector("#hint");
let hintStatus = false;
hint.src = "img/Hint.png";

/* (bron audio: https://www.youtube.com/watch?v=eibsYJlaNsg) */
let hintaudio = new Audio("sounds/hintgeluid.mp3");
let healthactive = false;
let kampvuur = document.querySelector("#kampvuur");
let javier = document.querySelector("#javier");

/* (bron audio: https://www.youtube.com/watch?v=i6PYS0SPwO4) */ 
let kookaudio = new Audio("sounds/kookgeluid.mp3");
let kookStatus = false;
let maag = Math.ceil(Math.random()* 5);

/* Achtergrondmuziek (bron: https://www.youtube.com/watch?v=XJsy5jJ7Dp0) */
let muziek = new Audio("sounds/muziek.mp3");
let muziekStatus = false;

/* (bron audio: https://www.youtube.com/watch?v=RlvRyo4ofvM) */
let voeraudio = new Audio("sounds/voergeluid.mp3");

/* Array voor verschillende states (bron: If else opdracht) */
let plaatjesHP = ['HP1.png', 'HP2.png', 'HP3.png', 'HP4.png', 'HP5.png', 'HP6.png'];
let HPafbeelding = plaatjesHP[maag-1];

let voer = maag;
let vol = false;
let buffActive = false;

/* Constanten voor buttons */
const Ignis = document.querySelector("#ignis");
const plusKnop = document.querySelector("#plus");
const hintKnop = document.querySelector("#hint");
const Kampvuur = document.querySelector("#kampvuur")
const Boombox = document.querySelector("#muziek")

document.querySelector("img").src = 'img/'+HPafbeelding;

Kampvuur.src = "img/Kampvuur.gif";

/* HINT INTERACTIE MECHANISME (bron eigen research: https://gomakethings.com/how-to-play-a-sound-with-javascript/) */
function Tutorial(){
    hintaudio.play();
    hintactive = !hintactive;
    if(hintactive == true){
        document.getElementById("speler").style.display = 'none';
        document.getElementById("slimes").style.display = 'none';
        document.getElementById("muziek").style.display = 'none';
    } else {document.getElementById("speler").style.display = 'block';
            document.getElementById("slimes").style.display = 'block';
            document.getElementById("muziek").style.display = 'block';
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
    healthactive = !healthactive;
    if(healthactive == true){
        document.getElementById("health").style.display = 'block';
    } else {document.getElementById("health").style.display = 'none';}
}

/* KOOK MECHANISME (bron: Lightbulb opdracht) */
function Koken(){
    if (kookStatus == true){
        Kampvuur.src = "img/Kampvuur.gif"
        kookStatus = false
        document.getElementById("javier").style.display = 'block';
        kookaudio.pause();
    } else {
        Kampvuur.src = "img/Koken.gif"
        kookStatus = true
        document.getElementById("javier").style.display = 'none';
        kookaudio.play();
        setTimeout(function(){
            buffActive = true;
        }, 1000)
    }
}

if (kookStatus == true){
    Kampvuur.src = "img/Koken.gif"
    kookStatus = false
    document.getElementById("javier").style.display = 'block';
}

/* VOEDING MECHANISME (bron: Myster number opdracht) */
function meerVoeren(){
    if (buffActive == false){
        voer = voer + 1;
        Ignis.src = "img/IgnisEten.gif"
        voeraudio.play();
        updateVoeding();
    } else if (buffActive == true){
        voer = voer + 2;
        Ignis.src = "img/IgnisEten.gif"
        voeraudio.play();
        updateVoeding();
    }
}

function updateVoeding(){
    if (voer == 1){
        hp.src = "img/HP1.png"
        Ignis.src = "img/IgnisMoe.png"
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
        Ignis.src = "img/IgnisBlij.gif"
        vol = true
    } else if (voer >= 7){
        hp.src = "img/HP6.png"
        Ignis.src = "img/IgnisBlij.gif"
        vol = true
    } else if (voer >= 8){
        hp.src = "img/HP6.png"
        Ignis.src = "img/IgnisBlij.gif"
        vol = true
    } if (voer >= 6){
        voer = 6;
    }
}

/* MUZIEK INTERACTIE MECHANISME */
function Muziekdraaien(){
    if (muziekStatus == true){
        Boombox.src = "img/Boombox.png"
        document.getElementById("muziek").style.display = 'block';
        muziekStatus = false
        muziek.pause();
    } else {
        Boombox.src = "img/BoomboxActive.gif"
        document.getElementById("muziek").style.display = 'block';
        muziekStatus = true
        muziek.play();
    }
}

if (muziekStatus == true){
    Boombox.src = "img/Boombox.png"
    document.getElementById("muziek").style.display = 'block';
    muziekStatus = false
}

/* Als de slime vol zit zorgt deze functie ervoor dat hij weer honger krijgt (bron: Diego Ramon) */
setInterval(function(){if (vol == true){
    voer--;
    updateVoeding();
}}, 8000)

/* Timer voor de kookfunctie */
setInterval(function(){if (kookStatus == true){
    Koken();
    setTimeout(function(){
        buffActive = false;
    }, 10000)
}}, 8000)

/* Events voor bruikbare knoppen */
hintKnop.addEventListener('click', Tutorial)
Ignis.addEventListener("click", InteractieSlime)
Kampvuur.addEventListener('click', Koken)
plusKnop.addEventListener('click', meerVoeren)
Boombox.addEventListener('click', Muziekdraaien)