/* START */
console.log("Slime Garden");

/* Vertoont een hint */
let hintactive = false;
let hint = document.querySelector("#hint")
let hintStatus = false;
hint.src = "img/Hint.png"

/* Audio voor als er op de hint button word gedrukt (bron: https://gomakethings.com/how-to-play-a-sound-with-javascript/) */
let hintaudio = new Audio("sounds/hintgeluid.mp3");

function Tutorial(){
    console.log("Hulp nodig?")
    hintaudio.play();
    hintactive = !hintactive;
    if(hintactive == true){
        document.getElementById("speler").style.display = 'none';
        document.getElementById("slimes").style.display = 'none';
    } else {document.getElementById("speler").style.display = 'block';
            document.getElementById("slimes").style.display = 'block';
    }
    if (hintStatus == true){
        hint.src = "img/Tutorial.png"
        hintStatus = false
    } else {
        hint.src = "img/Hint.png"
        hintStatus = true
    }
}
hint.addEventListener('click', Tutorial)

if (hintStatus == true){
    hint.src = "img/Tutorial.png"
    hintStatus = false
} else {
    hint.src = "img/Hint.png"
    hintStatus = true
}

/* Achtergrondmuziek (bron: https://www.youtube.com/watch?v=XJsy5jJ7Dp0)*/

/* SLIME INTERACTIE MECHANISME */
let healthactive = false;

/* Verbergt menu(s) achter slime (bron: Diego Ramon) */
function InteractieSlime() {
    console.log("Bloop")
    healthactive = !healthactive;
    if(healthactive == true){
        document.getElementById("health").style.display = 'block';
    } else {document.getElementById("health").style.display = 'none';}
}

/* Event voor bruikbare knop */
ignis.addEventListener("click", InteractieSlime)


/* KOOK MECHANISME (bron: Lightbulb opdracht) */
let kampvuur = document.querySelector("#kampvuur")
let kookaudio = new Audio("sounds/kookgeluid.mp3");
let kookStatus = false
kampvuur.src = "img/Kampvuur.gif"

function Koken(){
    if (kookStatus == true){
        kampvuur.src = "img/Kampvuur.gif"
        kookStatus = false
        document.getElementById("javier").style.display = 'block';
    } else {
        kampvuur.src = "img/Koken.gif"
        kookStatus = true
        document.getElementById("javier").style.display = 'none';
    }
    kookaudio.play();
}

if (kookStatus == true){
    kampvuur.src = "img/Koken.gif"
    kookStatus = false
    document.getElementById("javier").style.display = 'block';
}

kampvuur.addEventListener('click', Koken)

/* Timer voor de kookfunctie */
setInterval(function(){if (kookStatus == true){
    Koken();
}}, 11000)

/* VOEDING MECHANISME (bron: Myster number opdracht) */
let maag = Math.ceil(Math.random()* 5);
console.log(maag);

/* Array voor verschillende states (bron: If else opdracht) */
let plaatjesHP = ['HP1.png', 'HP2.png', 'HP3.png', 'HP4.png', 'HP5.png', 'HP6.png']

let HPafbeelding = plaatjesHP[maag-1];

document.querySelector("img").src = 'img/'+HPafbeelding;

let voer = maag;

let vol = false;

/* Constanten voor elementen */
const plusKnop = document.querySelector("#plus")

/* Voedingsproces */
function meerVoeren(){
    console.log("meer")
    voer = voer + 1;
    updateVoeding();
}

function updateVoeding(){
    console.log("maag: " + voer);
    if ( (voer == 1) ){
        hp.src = "img/HP1.png"
        ignis.src = "img/IgnisNiks.gif"
        vol = false;
    } else if ( (voer == 2) ){
        hp.src = "img/HP2.png"
        ignis.src = "img/IgnisEten.gif"
    } else if ( (voer == 3) ){
        hp.src = "img/HP3.png"
        ignis.src = "img/IgnisEten.gif"
    } else if ( (voer == 4) ){
        hp.src = "img/HP4.png"
        ignis.src = "img/IgnisEten.gif"
    } else if ( (voer == 5) ){
        hp.src = "img/HP5.png"
        ignis.src = "img/IgnisEten.gif"
    } else if ( (voer == 6) ){
        hp.src = "img/HP6.png"
        ignis.src = "img/IgnisBlij.gif"
        vol = true;
    } if ( (voer > 6) ){
        voer = 6;
    }
}

/* Als de slime vol zit zorgt deze functie ervoor dat hij weer honger krijgt (bron: Diego Ramon) */
setInterval(function(){if (vol == true){
    voer--;
    console.log("Slime zit vol, status gaat nu omlaag")
    updateVoeding();
}}, 10000)

/* Events voor bruikbare knoppen */
plusKnop.addEventListener('click', meerVoeren)

/* 
for (let i = 0; i < 4; i++) {
    console.log(i);
}
*/

/*
let muziek = new Audio("sounds/muziek.mp3");
muziek.play();
*/